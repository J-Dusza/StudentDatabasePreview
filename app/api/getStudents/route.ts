import { NextResponse } from "next/server";

export async function GET() {
  const data = { student: "John Doe" };

  return NextResponse.json({ data });
}
