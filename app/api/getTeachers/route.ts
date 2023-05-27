import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../prisma/client";
import { z } from "zod";
import { match } from "ts-pattern";
import { sortDirectionSchema, sortSchema3 } from "../../../shared/schemas";

export async function GET(request: NextRequest) {
  let sort = request.nextUrl.searchParams.get("sort");
  if (!sort) sort = "id";
  let direction = request.nextUrl.searchParams.get("direction");
  if (!direction) direction = "asc";

  const sortParseResult = sortSchema3.safeParse(sort);
  const directionParseResult = sortDirectionSchema.safeParse(direction);

  if (!sortParseResult.success || !directionParseResult.success) {
    return NextResponse.error();
  }

  const parsedSort = sortParseResult.data;
  const parsedDirection = directionParseResult.data;

  const orderBy = match(parsedSort)
    .with("id", () => [{ id: parsedDirection }])
    .with("lastname", () => [{ nazwisko: parsedDirection }])
    .with("firstname", () => [{ imie: parsedDirection }])
    .with("project", () => [{ projekty: { _count: parsedDirection } }])
    .exhaustive();

  try {
    const students = await prisma.prowadzacy.findMany({
      orderBy,
      include: {
        projekty: {
          select: {
            temat: true,
          },
          distinct: ["temat"],
          orderBy: {
            temat: "asc",
          },
        },
      },
    });
    return NextResponse.json({ students });
  } catch (error) {
    return NextResponse.error();
  }
}
