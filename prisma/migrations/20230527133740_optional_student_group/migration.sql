-- DropForeignKey
ALTER TABLE "Student" DROP CONSTRAINT "Student_id_grupa_fkey";

-- AlterTable
ALTER TABLE "Student" ALTER COLUMN "id_grupa" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_id_grupa_fkey" FOREIGN KEY ("id_grupa") REFERENCES "Grupa"("id") ON DELETE SET NULL ON UPDATE CASCADE;
