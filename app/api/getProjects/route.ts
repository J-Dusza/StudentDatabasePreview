import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../prisma/client";
import { z } from "zod";
import { match } from "ts-pattern";
import { sortDirectionSchema, sortSchema3 } from "../../../shared/schemas";

export async function GET(request: NextRequest) {
  let sort = request.nextUrl.searchParams.get("sort");
  if (!sort) sort = "project";
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
    .with("lastname", () => [{ prowadzacy: { nazwisko: parsedDirection } }])
    .with("firstname", () => [{ prowadzacy: { imie: parsedDirection } }])
    .with("project", () => [{ temat: parsedDirection }])
    .exhaustive();

  try {
    const students = await prisma.projekt.findMany({
      orderBy,
      include: {
        prowadzacy: {
          select: {
            nazwisko: true,
            imie: true,
          },
        },
      },
      distinct: ["temat"],
    });
    return NextResponse.json({ students });
  } catch (error) {
    return NextResponse.error();
  }
}
