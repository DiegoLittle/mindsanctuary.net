/*
  Warnings:

  - Added the required column `userid` to the `medication` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "medication" ADD COLUMN     "userid" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "medication" ADD CONSTRAINT "medication_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
