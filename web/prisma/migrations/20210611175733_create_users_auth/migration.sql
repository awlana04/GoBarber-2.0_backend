-- AlterTable
ALTER TABLE "users" ADD COLUMN     "image" TEXT;

-- AddForeignKey
ALTER TABLE "accounts" ADD FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sessions" ADD FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
