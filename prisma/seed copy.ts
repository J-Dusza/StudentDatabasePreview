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
      {
        nazwisko: "Wójcik",
        imie: "Hanna",
        srednia: 3.4,
      },
      {
        nazwisko: "Kowalczyk",
        imie: "Oliwia",
        srednia: 3.8,
      },
      {
        nazwisko: "Mazur",
        imie: "Bartosz",
        srednia: 4.2,
      },
      {
        nazwisko: "Jankowski",
        imie: "Maja",
        srednia: 3.5,
      },
      {
        nazwisko: "Michalski",
        imie: "Filip",
        srednia: 3.9,
      },
      {
        nazwisko: "Krawczyk",
        imie: "Amelia",
        srednia: 4.3,
      },
      {
        nazwisko: "Piotrowski",
        imie: "Julia",
        srednia: 3.7,
      },
      {
        nazwisko: "Zając",
        imie: "Adam",
        srednia: 4.0,
      },
      {
        nazwisko: "Król",
        imie: "Natalia",
        srednia: 3.6,
      },
      {
        nazwisko: "Szymański",
        imie: "Aleksandra",
        srednia: 4.1,
      },
      {
        nazwisko: "Woźniak",
        imie: "Michał",
        srednia: 3.8,
      },
      {
        nazwisko: "Dąbrowski",
        imie: "Maja",
        srednia: 4.2,
      },
      {
        nazwisko: "Majewska",
        imie: "Bartosz",
        srednia: 3.6,
      },
      {
        nazwisko: "Nowicki",
        imie: "Antonina",
        srednia: 4.0,
      },
      {
        nazwisko: "Kaczmarek",
        imie: "Zuzanna",
        srednia: 3.7,
      },
      {
        nazwisko: "Zielińska",
        imie: "Wojciech",
        srednia: 4.1,
      },
      {
        nazwisko: "Sikora",
        imie: "Nina",
        srednia: 3.5,
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
      {
        nazwisko: "Michalska",
        imie: "Natalia",
        srednia: 3.4,
      },
      {
        nazwisko: "Lis",
        imie: "Aleksander",
        srednia: 3.8,
      },
      {
        nazwisko: "Witkowski",
        imie: "Kacper",
        srednia: 4.1,
      },
      {
        nazwisko: "Kowalczyk",
        imie: "Nina",
        srednia: 3.3,
      },
      {
        nazwisko: "Mazur",
        imie: "Mikołaj",
        srednia: 3.9,
      },
      {
        nazwisko: "Krawczyk",
        imie: "Emilia",
        srednia: 4.2,
      },
      {
        nazwisko: "Piotrowska",
        imie: "Laura",
        srednia: 3.5,
      },
      {
        nazwisko: "Kaczmarek",
        imie: "Szymon",
        srednia: 3.7,
      },
      {
        nazwisko: "Król",
        imie: "Wiktoria",
        srednia: 4.0,
      },
      {
        nazwisko: "Nowakowska",
        imie: "Maja",
        srednia: 3.6,
      },
      {
        nazwisko: "Lewandowska",
        imie: "Michalina",
        srednia: 3.9,
      },
      {
        nazwisko: "Zieliński",
        imie: "Oskar",
        srednia: 4.1,
      },
      {
        nazwisko: "Szymańska",
        imie: "Hanna",
        srednia: 3.5,
      },
      {
        nazwisko: "Woźniak",
        imie: "Jan",
        srednia: 3.8,
      },
      {
        nazwisko: "Dąbrowska",
        imie: "Iga",
        srednia: 4.0,
      },
      {
        nazwisko: "Majewska",
        imie: "Filip",
        srednia: 3.6,
      },
      {
        nazwisko: "Nowicki",
        imie: "Antonina",
        srednia: 3.9,
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
      {
        nazwisko: "Lewandowski",
        imie: "Piotr",
        srednia: 3.7,
      },
      {
        nazwisko: "Wójcik",
        imie: "Katarzyna",
        srednia: 3.8,
      },
      {
        nazwisko: "Kamiński",
        imie: "Alicja",
        srednia: 4.2,
      },
      {
        nazwisko: "Kowalczyk",
        imie: "Tomasz",
        srednia: 3.6,
      },
      {
        nazwisko: "Zielińska",
        imie: "Magdalena",
        srednia: 4.1,
      },
      {
        nazwisko: "Szymański",
        imie: "Wojciech",
        srednia: 3.9,
      },
      {
        nazwisko: "Woźniak",
        imie: "Patrycja",
        srednia: 4.3,
      },
      {
        nazwisko: "Jankowski",
        imie: "Aleksandra",
        srednia: 3.7,
      },
      {
        nazwisko: "Mazur",
        imie: "Bartosz",
        srednia: 4.0,
      },
      {
        nazwisko: "Kwiatkowski",
        imie: "Marta",
        srednia: 3.8,
      },
      {
        nazwisko: "Krawczyk",
        imie: "Kamil",
        srednia: 4.2,
      },
      {
        nazwisko: "Piotrowski",
        imie: "Natalia",
        srednia: 3.6,
      },
      {
        nazwisko: "Grabowski",
        imie: "Dominik",
        srednia: 4.1,
      },
      {
        nazwisko: "Nowicka",
        imie: "Karolina",
        srednia: 3.9,
      },
      {
        nazwisko: "Michalski",
        imie: "Oliwia",
        srednia: 4.3,
      },
      {
        nazwisko: "Zając",
        imie: "Sebastian",
        srednia: 3.7,
      },
      {
        nazwisko: "Król",
        imie: "Hanna",
        srednia: 4.0,
      },
    ],
  },
];
const prowadzacy = [
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
  {
    nazwisko: "Kamiński",
    imie: "Magdalena",
  },
  {
    nazwisko: "Jankowski",
    imie: "Tomasz",
  },
  {
    nazwisko: "Michalska",
    imie: "Ewa",
  },
  {
    nazwisko: "Krawczyk",
    imie: "Adam",
  },
  {
    nazwisko: "Piotrowska",
    imie: "Małgorzata",
  },
  {
    nazwisko: "Szymański",
    imie: "Alicja",
  },
];

const projekty = [
  {
    temat: "Analiza danych zastosowana w medycynie",
    punkty: 10,
    student: grupy[0].studenci[0],
    prowadzacy: prowadzacy[0],
  },
  {
    temat: "Algorytmy sztucznej inteligencji w przetwarzaniu obrazów",
    punkty: 8,
    student: grupy[0].studenci[1],
    prowadzacy: prowadzacy[1],
  },
  {
    temat: "Sieci neuronowe w rozpoznawaniu mowy",
    punkty: 9,
    student: grupy[0].studenci[2],
    prowadzacy: prowadzacy[2],
  },
  {
    temat: "Analiza danych z użyciem narzędzi Big Data",
    punkty: 7,
    student: grupy[1].studenci[2],
    prowadzacy: prowadzacy[2],
  },
];

async function main() {
  await prisma.student.deleteMany();
  await prisma.grupa.deleteMany();
  await prisma.projekt.deleteMany();
  await prisma.prowadzacy.deleteMany();

  for (const grupa of grupy) {
    await prisma.grupa.create({
      data: {
        nazwa: grupa.nazwa,
        studenci: {
          create: grupa.studenci,
        },
      },
    });
  }

  for (const osoba of prowadzacy) {
    await prisma.prowadzacy.create({
      data: osoba,
    });
  }
  for (const projekt of projekty) {
    await prisma.projekt.create({
      data: projekt,
    });
  }
}
main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
