-- AlterTable
ALTER TABLE "User" ADD COLUMN     "emailList" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "role" TEXT DEFAULT E'user';
