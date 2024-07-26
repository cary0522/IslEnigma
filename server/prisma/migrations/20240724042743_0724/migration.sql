-- AlterTable
ALTER TABLE "OrderItem" ALTER COLUMN "check_in_date" DROP NOT NULL,
ALTER COLUMN "check_out_date" DROP NOT NULL,
ALTER COLUMN "booked_date" DROP NOT NULL,
ALTER COLUMN "valid_date" DROP NOT NULL;
