-- CreateTable
CREATE TABLE "analytics_event" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "userid" TEXT NOT NULL,

    CONSTRAINT "analytics_event_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "analytics_event" ADD CONSTRAINT "analytics_event_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
