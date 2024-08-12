/*
  Warnings:

  - You are about to drop the column `bed_count` on the `room` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "room" DROP COLUMN "bed_count",
ADD COLUMN     "room_count" INTEGER NOT NULL DEFAULT 2;
