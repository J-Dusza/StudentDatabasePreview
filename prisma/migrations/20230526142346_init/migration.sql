-- CreateTable
CREATE TABLE "Grupa" (
    "id" SERIAL NOT NULL,
    "nazwa" TEXT NOT NULL,

    CONSTRAINT "Grupa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "nazwa" TEXT NOT NULL,
    "imie" TEXT NOT NULL,
    "srednia" DOUBLE PRECISION NOT NULL,
    "id_grupa" INTEGER NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Prowadzacy" (
    "id" SERIAL NOT NULL,
    "nazwisko" TEXT NOT NULL,
    "imie" TEXT NOT NULL,

    CONSTRAINT "Prowadzacy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Projekt" (
    "id" SERIAL NOT NULL,
    "temat" TEXT NOT NULL,
    "punkty" INTEGER NOT NULL,
    "id_student" INTEGER NOT NULL,
    "id_prowadzacy" INTEGER NOT NULL,

    CONSTRAINT "Projekt_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_id_grupa_fkey" FOREIGN KEY ("id_grupa") REFERENCES "Grupa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Projekt" ADD CONSTRAINT "Projekt_id_student_fkey" FOREIGN KEY ("id_student") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Projekt" ADD CONSTRAINT "Projekt_id_prowadzacy_fkey" FOREIGN KEY ("id_prowadzacy") REFERENCES "Prowadzacy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
