-- CreateEnum
CREATE TYPE "ServiceType" AS ENUM ('WALKING', 'BOARDING', 'DAYCARE', 'SITTING');

-- CreateTable
CREATE TABLE "Service" (
    "id" TEXT NOT NULL,
    "sitterId" TEXT NOT NULL,
    "serviceType" "ServiceType" NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_sitterId_fkey" FOREIGN KEY ("sitterId") REFERENCES "SitterProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
