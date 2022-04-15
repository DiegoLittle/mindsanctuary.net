-- CreateTable
CREATE TABLE "MoodLog" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "userid" TEXT NOT NULL,
    "moodvalue" INTEGER NOT NULL,

    CONSTRAINT "MoodLog_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MoodLog" ADD CONSTRAINT "MoodLog_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
