/*
  Warnings:

  - The primary key for the `customer_order` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `order_id` column on the `customer_order` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `order_id` on the `order_info` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `order_id` on the `order_item` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "order_info" DROP CONSTRAINT "fk_order_info_customer_order";

-- DropForeignKey
ALTER TABLE "order_item" DROP CONSTRAINT "fk_order_item_customer_order";

-- DropIndex
DROP INDEX "order_info_order_id_key";

-- AlterTable
ALTER TABLE "customer_order" DROP CONSTRAINT "customer_order_pkey",
DROP COLUMN "order_id",
ADD COLUMN     "order_id" SERIAL NOT NULL,
ADD CONSTRAINT "customer_order_pkey" PRIMARY KEY ("order_id");

-- AlterTable
ALTER TABLE "order_info" DROP COLUMN "order_id",
ADD COLUMN     "order_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "order_item" DROP COLUMN "order_id",
ADD COLUMN     "order_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "order_info" ADD CONSTRAINT "fk_order_info_customer_order" FOREIGN KEY ("order_id") REFERENCES "customer_order"("order_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "order_item" ADD CONSTRAINT "fk_order_item_customer_order" FOREIGN KEY ("order_id") REFERENCES "customer_order"("order_id") ON DELETE NO ACTION ON UPDATE NO ACTION;
