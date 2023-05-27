import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../prisma/client";
import { z } from "zod";
import { match } from "ts-pattern";
import { sortDirectionSchema, sortSchema4 } from "../../../shared/schemas";
import { Prisma } from "@prisma/client";

export async function GET(request: NextRequest) {
  let sort = request.nextUrl.searchParams.get("sort");
  if (!sort) sort = "id";
  let direction = request.nextUrl.searchParams.get("direction");
  if (!direction) direction = "asc";

  const sortParseResult = sortSchema4.safeParse(sort);
  const directionParseResult = sortDirectionSchema.safeParse(direction);

  if (!sortParseResult.success || !directionParseResult.success) {
    return NextResponse.error();
  }

  const parsedSort = sortParseResult.data;
  const parsedDirection = directionParseResult.data;

  const orderBy = match(parsedSort)
    .with("id", () => [{ id: parsedDirection }])
    .with("lastname", () => [
      { nazwisko: parsedDirection },
      { imie: parsedDirection },
    ])
    .with("firstname", () => [
      { imie: parsedDirection },
      { nazwisko: parsedDirection },
    ])
    .with("avarage", () => [
      { srednia: parsedDirection },
      { nazwisko: parsedDirection },
      { imie: parsedDirection },
    ])
    .exhaustive();

  try {
    const students = await prisma.$queryRaw(
      Prisma.sql`   SELECT s.imie, s.nazwisko, s.srednia
                    FROM Student s
                    GROUP BY s.imie, s.nazwisko
                    HAVING s.srednia > (SELECT AVG(srednia) FROM Student)

`
    );
    console.log(students);
    return NextResponse.json({ students });
  } catch (error) {
    return NextResponse.error();
  }
}
