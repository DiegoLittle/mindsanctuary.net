-- CreateTable
CREATE TABLE "medication" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "dose" INTEGER NOT NULL,
    "daily_frequency" INTEGER NOT NULL,

    CONSTRAINT "medication_pkey" PRIMARY KEY ("id")
);
