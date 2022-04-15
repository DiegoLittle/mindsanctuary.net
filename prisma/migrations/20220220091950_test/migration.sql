-- CreateTable
CREATE TABLE "Survey" (
    "id" TEXT NOT NULL,
    "respondantid" TEXT NOT NULL,

    CONSTRAINT "Survey_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Question" (
    "id" TEXT NOT NULL,
    "surveyid" TEXT NOT NULL,
    "questiontext" TEXT NOT NULL,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Answer" (
    "id" TEXT NOT NULL,
    "questionid" TEXT NOT NULL,
    "surveyid" TEXT NOT NULL,

    CONSTRAINT "Answer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Survey" ADD CONSTRAINT "Survey_respondantid_fkey" FOREIGN KEY ("respondantid") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_surveyid_fkey" FOREIGN KEY ("surveyid") REFERENCES "Survey"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_surveyid_fkey" FOREIGN KEY ("surveyid") REFERENCES "Survey"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_questionid_fkey" FOREIGN KEY ("questionid") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
