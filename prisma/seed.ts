import { prisma } from "../prisma/client";

async function main() {
  await prisma.projekt.deleteMany();
  await prisma.student.deleteMany();
  await prisma.prowadzacy.deleteMany();
  await prisma.grupa.deleteMany();

  const grupa1 = await prisma.grupa.create({
    data: {
      nazwa: "Grupa 1",
    },
  });

  const grupa2 = await prisma.grupa.create({
    data: {
      nazwa: "Grupa 2",
    },
  });

  const student1 = await prisma.student.create({
    data: {
      nazwisko: "Kowalski",
      imie: "Jan",
      srednia: 4.5,
      grupa: {
        connect: {
          id: grupa1.id,
        },
      },
    },
  });

  const student2 = await prisma.student.create({
    data: {
      nazwisko: "Nowak",
      imie: "Anna",
      srednia: 3.8,
      grupa: {
        connect: {
          id: grupa1.id,
        },
      },
    },
  });

  const student3 = await prisma.student.create({
    data: {
      nazwisko: "Smith",
      imie: "John",
      srednia: 4.2,
      grupa: {
        connect: {
          id: grupa2.id,
        },
      },
    },
  });
  const student4 = await prisma.student.create({
    data: {
      nazwisko: "Małopolski",
      imie: "Paweł",
      srednia: 4.8,
    },
  });

  const prowadzacy1 = await prisma.prowadzacy.create({
    data: {
      nazwisko: "Kowalczyk",
      imie: "Adam",
    },
  });

  const prowadzacy2 = await prisma.prowadzacy.create({
    data: {
      nazwisko: "Wójcik",
      imie: "Magdalena",
    },
  });

  const prowadzacy3 = await prisma.prowadzacy.create({
    data: {
      nazwisko: "Maj",
      imie: "Kazimierz",
    },
  });

  const projekt1 = await prisma.projekt.create({
    data: {
      temat: "Temat 1",
      punkty: 10,
      student: {
        connect: {
          id: student1.id,
        },
      },
      prowadzacy: {
        connect: {
          id: prowadzacy1.id,
        },
      },
    },
  });
  const projekt1_2 = await prisma.projekt.create({
    data: {
      temat: "Temat 1",
      punkty: 10,
      student: {
        connect: {
          id: student1.id,
        },
      },
      prowadzacy: {
        connect: {
          id: prowadzacy1.id,
        },
      },
    },
  });

  const projekt2 = await prisma.projekt.create({
    data: {
      temat: "Temat 2",
      punkty: 8,
      student: {
        connect: {
          id: student2.id,
        },
      },
      prowadzacy: {
        connect: {
          id: prowadzacy3.id,
        },
      },
    },
  });
  const projekt3 = await prisma.projekt.create({
    data: {
      temat: "Temat 3",
      punkty: 8,
      student: {
        connect: {
          id: student4.id,
        },
      },
      prowadzacy: {
        connect: {
          id: prowadzacy3.id,
        },
      },
    },
  });
  const projekt4 = await prisma.projekt.create({
    data: {
      temat: "Temat 4",
      punkty: 8,
      student: {
        connect: {
          id: student2.id,
        },
      },
      prowadzacy: {
        connect: {
          id: prowadzacy2.id,
        },
      },
    },
  });
  const projekt4_2 = await prisma.projekt.create({
    data: {
      temat: "Temat 4",
      punkty: 8,
      student: {
        connect: {
          id: student2.id,
        },
      },
      prowadzacy: {
        connect: {
          id: prowadzacy2.id,
        },
      },
    },
  });

  console.log("Seed completed successfully.");
}

main()
  .catch((error) => {
    console.error(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
