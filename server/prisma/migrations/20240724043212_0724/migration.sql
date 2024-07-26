-- AlterTable
ALTER TABLE "OrderItem" ADD COLUMN     "people_count" INTEGER;

-- AlterTable
ALTER TABLE "Room" ADD COLUMN     "capacity" INTEGER NOT NULL DEFAULT 2;
