"use client";

async function getStudents() {
  const res = await fetch("http://localhost:3000/api/getStudents");
  return await res.json();
}

export default async function Home() {
  const data = await getStudents();
  console.log(data);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-5xl font-extrabold">Home</h1>
      <p></p>
    </main>
  );
}
