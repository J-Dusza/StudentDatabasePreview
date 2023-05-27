import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    students: [
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Doe" },
    ],
  };

  return NextResponse.json(data);
}
