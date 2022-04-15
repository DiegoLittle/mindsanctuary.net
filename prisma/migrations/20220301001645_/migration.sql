/*
  Warnings:

  - The primary key for the `Survey` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `isComplete` on the `Survey` table. All the data in the column will be lost.
  - You are about to drop the column `respondentid` on the `Survey` table. All the data in the column will be lost.
  - You are about to drop the column `results` on the `Survey` table. All the data in the column will be lost.
  - You are about to drop the column `testid` on the `Survey` table. All the data in the column will be lost.
  - The `id` column on the `Survey` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropForeignKey
ALTER TABLE "Survey" DROP CONSTRAINT "Survey_respondentid_fkey";

-- AlterTable
ALTER TABLE "Survey" DROP CONSTRAINT "Survey_pkey",
DROP COLUMN "isComplete",
DROP COLUMN "respondentid",
DROP COLUMN "results",
DROP COLUMN "testid",
ADD COLUMN     "estimatedTime" TEXT,
ADD COLUMN     "type" TEXT,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Survey_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "SurveyResponse" (
    "id" TEXT NOT NULL,
    "surveyid" INTEGER NOT NULL,
    "respondentid" TEXT NOT NULL,
    "questions" JSONB,
    "isComplete" BOOLEAN NOT NULL DEFAULT false,
    "results" JSONB,

    CONSTRAINT "SurveyResponse_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SurveyResponse" ADD CONSTRAINT "SurveyResponse_respondentid_fkey" FOREIGN KEY ("respondentid") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SurveyResponse" ADD CONSTRAINT "SurveyResponse_surveyid_fkey" FOREIGN KEY ("surveyid") REFERENCES "Survey"("id") ON DELETE CASCADE ON UPDATE CASCADE;
