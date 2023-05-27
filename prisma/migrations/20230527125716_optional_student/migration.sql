-- DropForeignKey
ALTER TABLE "Projekt" DROP CONSTRAINT "Projekt_id_student_fkey";

-- AlterTable
ALTER TABLE "Projekt" ALTER COLUMN "id_student" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Projekt" ADD CONSTRAINT "Projekt_id_student_fkey" FOREIGN KEY ("id_student") REFERENCES "Student"("id") ON DELETE SET NULL ON UPDATE CASCADE;
