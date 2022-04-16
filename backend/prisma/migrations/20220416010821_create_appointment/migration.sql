/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `barbers` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "appointments" (
    "id" TEXT NOT NULL,
    "time" INTEGER NOT NULL,
    "date" INTEGER NOT NULL,
    "user_id" TEXT NOT NULL,
    "barber_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "appointments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "barbers_name_key" ON "barbers"("name");

-- AddForeignKey
ALTER TABLE "appointments" ADD CONSTRAINT "appointments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "appointments" ADD CONSTRAINT "appointments_barber_id_fkey" FOREIGN KEY ("barber_id") REFERENCES "barbers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
