/*
  Warnings:

  - A unique constraint covering the columns `[id_student]` on the table `Projekt` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_prowadzacy]` on the table `Projekt` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Projekt_id_student_key" ON "Projekt"("id_student");

-- CreateIndex
CREATE UNIQUE INDEX "Projekt_id_prowadzacy_key" ON "Projekt"("id_prowadzacy");
