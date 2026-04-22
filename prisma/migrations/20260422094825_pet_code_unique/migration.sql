/*
  Warnings:

  - A unique constraint covering the columns `[petCode]` on the table `pets` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "pets_name_breed_age_ownerId_key";

-- CreateIndex
CREATE UNIQUE INDEX "pets_petCode_key" ON "pets"("petCode");
