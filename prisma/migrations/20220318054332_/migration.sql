-- CreateTable
CREATE TABLE "chat_session" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "messages" JSONB[],
    "userid" TEXT NOT NULL,

    CONSTRAINT "chat_session_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "chat_session" ADD CONSTRAINT "chat_session_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
