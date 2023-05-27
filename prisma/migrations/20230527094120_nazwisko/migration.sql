/*
  Warnings:

  - You are about to drop the column `nazwa` on the `Student` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Student" DROP COLUMN "nazwa",
ADD COLUMN     "nazwisko" TEXT NOT NULL DEFAULT '';
