/*
  Warnings:

  - You are about to drop the column `Geo` on the `RequestLog` table. All the data in the column will be lost.
  - You are about to drop the column `UserAgent` on the `RequestLog` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "RequestLog" DROP COLUMN "Geo",
DROP COLUMN "UserAgent",
ADD COLUMN     "geo" JSONB,
ADD COLUMN     "useragent" TEXT;
