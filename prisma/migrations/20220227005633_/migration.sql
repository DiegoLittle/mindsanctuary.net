-- AlterTable
ALTER TABLE "Survey" ADD COLUMN     "isComplete" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "results" JSONB,
ADD COLUMN     "testid" INTEGER;
