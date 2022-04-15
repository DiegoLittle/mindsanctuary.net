-- CreateTable
CREATE TABLE "Survey" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "respondentid" TEXT NOT NULL,

    CONSTRAINT "Survey_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Survey" ADD CONSTRAINT "Survey_respondentid_fkey" FOREIGN KEY ("respondentid") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
