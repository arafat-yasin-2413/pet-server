/*
  Warnings:

  - You are about to drop the column `endData` on the `bookings` table. All the data in the column will be lost.
  - Added the required column `endDate` to the `bookings` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "bookings" DROP COLUMN "endData",
ADD COLUMN     "endDate" TIMESTAMP(3) NOT NULL;
