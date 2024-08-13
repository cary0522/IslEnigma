/*
  Warnings:

  - The primary key for the `facility` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `class_name` on the `facility` table. All the data in the column will be lost.
  - The `facility_id` column on the `facility` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `facility_id` column on the `facility_rule` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `room_id` column on the `order_item` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `ticket_id` column on the `order_item` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `room` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `available` on the `room` table. All the data in the column will be lost.
  - The `room_id` column on the `room` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `ticket` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `ticket_id` column on the `ticket` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to alter the column `type` on the `ticket` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to drop the `event` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `news` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `restaurant_menu` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `facility_class_name` to the `facility` table without a default value. This is not possible if the table is not empty.
  - Added the required column `facility_id_name` to the `facility` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rule_others` to the `facility` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `area` on the `facility` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "facility_rule" DROP CONSTRAINT "facility_rule_facility_id_fkey";

-- DropForeignKey
ALTER TABLE "order_item" DROP CONSTRAINT "order_item_room_id_fkey";

-- DropForeignKey
ALTER TABLE "order_item" DROP CONSTRAINT "order_item_ticket_id_fkey";

-- DropForeignKey
ALTER TABLE "restaurant_menu" DROP CONSTRAINT "restaurant_menu_facility_id_fkey";

-- AlterTable
ALTER TABLE "customer_order" ALTER COLUMN "order_date" SET DATA TYPE TIMESTAMP(6);

-- AlterTable
ALTER TABLE "facility" DROP CONSTRAINT "facility_pkey",
DROP COLUMN "class_name",
ADD COLUMN     "facility_class_name" VARCHAR(255) NOT NULL,
ADD COLUMN     "facility_id_name" VARCHAR(255) NOT NULL,
ADD COLUMN     "rule_others" VARCHAR(255) NOT NULL,
DROP COLUMN "facility_id",
ADD COLUMN     "facility_id" SERIAL NOT NULL,
DROP COLUMN "area",
ADD COLUMN     "area" INTEGER NOT NULL,
ALTER COLUMN "data_maintain" SET DATA TYPE VARCHAR(255),
ADD CONSTRAINT "facility_pkey" PRIMARY KEY ("facility_id");

-- AlterTable
ALTER TABLE "facility_rule" DROP COLUMN "facility_id",
ADD COLUMN     "facility_id" INTEGER;

-- AlterTable
ALTER TABLE "member" ALTER COLUMN "birth" SET DATA TYPE VARCHAR(100);

-- AlterTable
ALTER TABLE "order_item" DROP COLUMN "room_id",
ADD COLUMN     "room_id" INTEGER,
DROP COLUMN "ticket_id",
ADD COLUMN     "ticket_id" INTEGER,
ALTER COLUMN "check_in_date" SET DATA TYPE TIMESTAMP(6),
ALTER COLUMN "check_out_date" SET DATA TYPE TIMESTAMP(6),
ALTER COLUMN "booked_date" SET DATA TYPE TIMESTAMP(6),
ALTER COLUMN "valid_date" SET DATA TYPE TIMESTAMP(6);

-- AlterTable
ALTER TABLE "room" DROP CONSTRAINT "room_pkey",
DROP COLUMN "available",
DROP COLUMN "room_id",
ADD COLUMN     "room_id" SERIAL NOT NULL,
ADD CONSTRAINT "room_pkey" PRIMARY KEY ("room_id");

-- AlterTable
ALTER TABLE "ticket" DROP CONSTRAINT "ticket_pkey",
DROP COLUMN "ticket_id",
ADD COLUMN     "ticket_id" SERIAL NOT NULL,
ALTER COLUMN "type" SET DATA TYPE VARCHAR(100),
ADD CONSTRAINT "ticket_pkey" PRIMARY KEY ("ticket_id");

-- DropTable
DROP TABLE "event";

-- DropTable
DROP TABLE "news";

-- DropTable
DROP TABLE "restaurant_menu";

-- CreateTable
CREATE TABLE "more_about" (
    "more_about_id" SERIAL NOT NULL,
    "more_link" TEXT NOT NULL,
    "facility_id" INTEGER NOT NULL,
    "img" JSONB,

    CONSTRAINT "more_about_pkey" PRIMARY KEY ("more_about_id")
);

-- RenameForeignKey
ALTER TABLE "credit_card" RENAME CONSTRAINT "credit_card_member_id_fkey" TO "fk_credit_card_member";

-- RenameForeignKey
ALTER TABLE "customer_order" RENAME CONSTRAINT "customer_order_member_id_fkey" TO "fk_customer_order_member";

-- RenameForeignKey
ALTER TABLE "order_info" RENAME CONSTRAINT "order_info_order_id_fkey" TO "fk_order_info_customer_order";

-- RenameForeignKey
ALTER TABLE "order_item" RENAME CONSTRAINT "order_item_order_id_fkey" TO "fk_order_item_customer_order";

-- AddForeignKey
ALTER TABLE "facility_rule" ADD CONSTRAINT "fk_facility_rule_facility" FOREIGN KEY ("facility_id") REFERENCES "facility"("facility_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "more_about" ADD CONSTRAINT "fk_more_about_facility" FOREIGN KEY ("facility_id") REFERENCES "facility"("facility_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "order_item" ADD CONSTRAINT "fk_order_item_room" FOREIGN KEY ("room_id") REFERENCES "room"("room_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "order_item" ADD CONSTRAINT "fk_order_item_ticket" FOREIGN KEY ("ticket_id") REFERENCES "ticket"("ticket_id") ON DELETE NO ACTION ON UPDATE NO ACTION;
