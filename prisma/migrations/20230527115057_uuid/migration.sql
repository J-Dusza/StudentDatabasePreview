/*
  Warnings:

  - The primary key for the `Grupa` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Projekt` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Prowadzacy` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Student` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Projekt" DROP CONSTRAINT "Projekt_id_prowadzacy_fkey";

-- DropForeignKey
ALTER TABLE "Projekt" DROP CONSTRAINT "Projekt_id_student_fkey";

-- DropForeignKey
ALTER TABLE "Student" DROP CONSTRAINT "Student_id_grupa_fkey";

-- AlterTable
ALTER TABLE "Grupa" DROP CONSTRAINT "Grupa_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Grupa_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Grupa_id_seq";

-- AlterTable
ALTER TABLE "Projekt" DROP CONSTRAINT "Projekt_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "id_student" SET DATA TYPE TEXT,
ALTER COLUMN "id_prowadzacy" SET DATA TYPE TEXT,
ADD CONSTRAINT "Projekt_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Projekt_id_seq";

-- AlterTable
ALTER TABLE "Prowadzacy" DROP CONSTRAINT "Prowadzacy_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Prowadzacy_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Prowadzacy_id_seq";

-- AlterTable
ALTER TABLE "Student" DROP CONSTRAINT "Student_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "id_grupa" SET DATA TYPE TEXT,
ADD CONSTRAINT "Student_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Student_id_seq";

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_id_grupa_fkey" FOREIGN KEY ("id_grupa") REFERENCES "Grupa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Projekt" ADD CONSTRAINT "Projekt_id_student_fkey" FOREIGN KEY ("id_student") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Projekt" ADD CONSTRAINT "Projekt_id_prowadzacy_fkey" FOREIGN KEY ("id_prowadzacy") REFERENCES "Prowadzacy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
