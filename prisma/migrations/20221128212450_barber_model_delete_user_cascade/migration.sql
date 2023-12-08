-- DropForeignKey
ALTER TABLE "barbers" DROP CONSTRAINT "barbers_user_id_fkey";

-- AddForeignKey
ALTER TABLE "barbers" ADD CONSTRAINT "barbers_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
