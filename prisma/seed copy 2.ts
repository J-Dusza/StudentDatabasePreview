import { forwardRef } from "react";
import { prisma } from "../prisma/client";

const grupy = [
  {
    nazwa: "Grupa 1",
    studenci: [
      {
        nazwisko: "Kowalski",
        imie: "Mikołaj",
        srednia: 3.3,
      },
      {
        nazwisko: "Nowak",
        imie: "Zofia",
        srednia: 3.7,
      },
      {
        nazwisko: "Lewandowski",
        imie: "Kacper",
        srednia: 4.1,
      },
    ],
  },
  {
    nazwa: "Grupa 2",
    studenci: [
      {
        nazwisko: "Wójcik",
        imie: "Jakub",
        srednia: 3.2,
      },
      {
        nazwisko: "Kowalska",
        imie: "Zuzanna",
        srednia: 3.6,
      },
      {
        nazwisko: "Jankowska",
        imie: "Julia",
        srednia: 4.0,
      },
    ],
  },
  {
    nazwa: "Grupa 3",
    studenci: [
      {
        nazwisko: "Kowalski",
        imie: "Jan",
        srednia: 3.5,
      },
      {
        nazwisko: "Nowak",
        imie: "Adam",
        srednia: 3.9,
      },
      {
        nazwisko: "Dąbrowski",
        imie: "Michał",
        srednia: 4.0,
      },
    ],
  },
];

const teachers = [
  {
    nazwisko: "Nowak",
    imie: "Anna",
  },
  {
    nazwisko: "Kowalczyk",
    imie: "Piotr",
  },
  {
    nazwisko: "Lewandowska",
    imie: "Katarzyna",
  },
  {
    nazwisko: "Wójcik",
    imie: "Marek",
  },
];

const projekty = [
  {
    temat: "Analiza danych w medycynie",
    punkty: 5,
  },
  {
    temat: "System zarządzania bazą danych dla małej firmy",
    punkty: 7,
  },
  {
    temat:
      "Aplikacja do analizy sentymentu na podstawie mediów społecznościowych. System monitorowania",
    punkty: 6,
  },
  {
    temat: "System monitorowania sieci komputerowych",
    punkty: 8,
  },
  {
    temat: "Aplikacja do zarządzania magazynem",
    punkty: 7,
  },
  {
    temat: "Oprogramowanie do automatyzacji procesów biznesowych",
    punkty: 9,
  },
  {
    temat: "Aplikacja do planowania i organizacji spotkań",
    punkty: 9,
  },
  {
    temat: "Oprogramowanie do generowania i zarządzania raportami",
    punkty: 8,
  },
  {
    temat: "System rezerwacji i zarządzania miejscami w kinie",
    punkty: 6,
  },
  {
    temat: "Aplikacja mobilna do nauki języków obcych",
    punkty: 6,
  },
  {
    temat: "Platforma e-commerce dla sprzedaży produktów online",
    punkty: 8,
  },
  {
    temat: "System zarządzania projektami dla zespołów programistycznych",
    punkty: 5,
  },
];

async function main() {
  await prisma.projekt.deleteMany();
  await prisma.student.deleteMany();
  await prisma.prowadzacy.deleteMany();
  await prisma.grupa.deleteMany();

  const prowadzacyResult = await Promise.all(
    teachers.map(async (teacher) => {
      return await prisma.prowadzacy.create({
        data: {
          nazwisko: teacher.nazwisko,
          imie: teacher.imie,
        },
      });
    })
  );

  const grupyResult = await Promise.all(
    grupy.map(async (grupa) => {
      return await prisma.grupa.create({
        data: {
          nazwa: grupa.nazwa,
          studenci: {
            create: grupa.studenci,
          },
        },
        include: {
          studenci: {
            select: {
              id: true,
            },
          },
        },
      });
    })
  );
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
