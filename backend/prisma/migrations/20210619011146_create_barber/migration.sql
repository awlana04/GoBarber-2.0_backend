/*
  Warnings:

  - Made the column `barber_location` on table `barbers` required. This step will fail if there are existing NULL values in that column.
  - Made the column `open_on_weekends` on table `barbers` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "barbers" ALTER COLUMN "barber_location" SET NOT NULL,
ALTER COLUMN "open_on_weekends" SET NOT NULL;
