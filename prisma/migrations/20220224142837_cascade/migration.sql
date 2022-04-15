-- DropForeignKey
ALTER TABLE "MoodLog" DROP CONSTRAINT "MoodLog_userid_fkey";

-- DropForeignKey
ALTER TABLE "Survey" DROP CONSTRAINT "Survey_respondentid_fkey";

-- AddForeignKey
ALTER TABLE "Survey" ADD CONSTRAINT "Survey_respondentid_fkey" FOREIGN KEY ("respondentid") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MoodLog" ADD CONSTRAINT "MoodLog_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
