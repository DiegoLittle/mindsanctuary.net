-- CreateTable
CREATE TABLE "RequestLog" (
    "id" TEXT NOT NULL,
    "request" JSONB,

    CONSTRAINT "RequestLog_pkey" PRIMARY KEY ("id")
);
