-- AlterTable
ALTER TABLE "Room" ADD COLUMN     "bed_count" INTEGER NOT NULL DEFAULT 2,
ADD COLUMN     "desc" TEXT,
ADD COLUMN     "img" JSONB;

-- AlterTable
ALTER TABLE "Ticket" ADD COLUMN     "img" JSONB;
