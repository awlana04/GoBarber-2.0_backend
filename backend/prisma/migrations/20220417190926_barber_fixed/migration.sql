/*
  Warnings:

  - You are about to drop the column `comments` on the `barbers` table. All the data in the column will be lost.
  - You are about to drop the column `ratimg` on the `barbers` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "barbers" DROP COLUMN "comments",
DROP COLUMN "ratimg";
