import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../prisma/client";
import { z } from "zod";
import { match } from "ts-pattern";
import { sortDirectionSchema, sortSchema2 } from "../../../shared/schemas";

export async function GET(request: NextRequest) {
  let sort = request.nextUrl.searchParams.get("sort");
  if (!sort) sort = "id";
  let direction = request.nextUrl.searchParams.get("direction");
  if (!direction) direction = "asc";

  const sortParseResult = sortSchema2.safeParse(sort);
  const directionParseResult = sortDirectionSchema.safeParse(direction);

  if (!sortParseResult.success || !directionParseResult.success) {
    return NextResponse.error();
  }

  const parsedSort = sortParseResult.data;
  const parsedDirection = direction
    ? directionParseResult.data
    : ("asc" as const);

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
    .with("group", () => [
      { grupa: { nazwa: parsedDirection } },
      { nazwisko: parsedDirection },
      { imie: parsedDirection },
    ])
    .exhaustive();

  try {
    const students = await prisma.student.findMany({
      orderBy,
      include: {
        grupa: {
          select: {
            nazwa: true,
          },
        },
        projekt: {
          select: {
            temat: true,
          },
        },
      },
    });
    return NextResponse.json({ students });
  } catch (error) {
    return NextResponse.error();
  }
}
