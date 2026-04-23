-- CreateTable
CREATE TABLE "SitterProfile" (
    "id" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "experience" INTEGER NOT NULL,
    "hourlyRate" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "sitterId" TEXT NOT NULL,

    CONSTRAINT "SitterProfile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SitterProfile_sitterId_key" ON "SitterProfile"("sitterId");

-- AddForeignKey
ALTER TABLE "SitterProfile" ADD CONSTRAINT "SitterProfile_sitterId_fkey" FOREIGN KEY ("sitterId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
