/*
  Warnings:

  - A unique constraint covering the columns `[name,breed,age,ownerId]` on the table `pets` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "pets_name_breed_age_ownerId_key" ON "pets"("name", "breed", "age", "ownerId");
