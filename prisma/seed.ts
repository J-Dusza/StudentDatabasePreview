import { prisma } from "./client";
async function main() {
  const grupa1 = await prisma.grupa.create({
    data: {
      nazwa: "Grupa 1",
    },
  });
  const user = await prisma.student.create({
    data: {
      nazwa: "Mariusz Kowalski",
      imie: "Mariusz",
      srednia: 4.87,
      id_grupa: grupa1.id,
    },
  });
  console.log(user);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
