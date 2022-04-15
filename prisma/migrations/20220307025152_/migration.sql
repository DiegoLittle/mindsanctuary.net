/*
  Warnings:

  - You are about to drop the column `request` on the `RequestLog` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "RequestLog" DROP COLUMN "request",
ADD COLUMN     "Geo" JSONB,
ADD COLUMN     "UserAgent" TEXT,
ADD COLUMN     "ip" TEXT,
ADD COLUMN     "message" TEXT,
ADD COLUMN     "page" TEXT,
ADD COLUMN     "referrer" TEXT;
