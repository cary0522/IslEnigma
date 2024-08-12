/*
  Warnings:

  - You are about to drop the `Member` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Order` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OrderInfo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OrderItem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Room` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Ticket` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_member_id_fkey";

-- DropForeignKey
ALTER TABLE "OrderInfo" DROP CONSTRAINT "OrderInfo_order_id_fkey";

-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_order_id_fkey";

-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_room_id_fkey";

-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_ticket_id_fkey";

-- DropTable
DROP TABLE "Member";

-- DropTable
DROP TABLE "Order";

-- DropTable
DROP TABLE "OrderInfo";

-- DropTable
DROP TABLE "OrderItem";

-- DropTable
DROP TABLE "Room";

-- DropTable
DROP TABLE "Ticket";

-- DropEnum
DROP TYPE "OrderStatus";

-- DropEnum
DROP TYPE "PaymentMethod";

-- CreateTable
CREATE TABLE "credit_card" (
    "credit_card_id" SERIAL NOT NULL,
    "member_id" INTEGER,
    "number" VARCHAR(16) NOT NULL,
    "expiry" DATE NOT NULL,
    "cvv" VARCHAR(4) NOT NULL,

    CONSTRAINT "credit_card_pkey" PRIMARY KEY ("credit_card_id")
);

-- CreateTable
CREATE TABLE "customer_order" (
    "order_id" VARCHAR(191) NOT NULL,
    "member_id" INTEGER NOT NULL,
    "total_amount" INTEGER NOT NULL,
    "status" VARCHAR(7) NOT NULL,
    "order_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "customer_order_pkey" PRIMARY KEY ("order_id")
);

-- CreateTable
CREATE TABLE "event" (
    "event_id" VARCHAR(255) NOT NULL,
    "type" VARCHAR(100) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "content" TEXT,
    "publish_time" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "start_time" TIMESTAMPTZ(6) NOT NULL,
    "end_time" TIMESTAMPTZ(6) NOT NULL,
    "image" JSONB,
    "session" VARCHAR(100),
    "location" VARCHAR(255),

    CONSTRAINT "event_pkey" PRIMARY KEY ("event_id")
);

-- CreateTable
CREATE TABLE "facility" (
    "facility_id" VARCHAR(255) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "image" JSONB,
    "category" VARCHAR(255) NOT NULL,
    "des" TEXT,
    "content" TEXT,
    "area" VARCHAR(255) NOT NULL,
    "location" VARCHAR(255) NOT NULL,
    "open_time" VARCHAR(255),
    "data_maintain" DATE,
    "class_name" VARCHAR(255),
    "remarks" TEXT,

    CONSTRAINT "facility_pkey" PRIMARY KEY ("facility_id")
);

-- CreateTable
CREATE TABLE "facility_rule" (
    "facility_rule_id" SERIAL NOT NULL,
    "facility_id" VARCHAR(255),
    "rule_type" VARCHAR(50),
    "rule_value" VARCHAR(255),

    CONSTRAINT "facility_rule_pkey" PRIMARY KEY ("facility_rule_id")
);

-- CreateTable
CREATE TABLE "member" (
    "member_id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "address" VARCHAR(100),
    "birth" DATE,
    "account" VARCHAR(50) NOT NULL,
    "password" VARCHAR(64) NOT NULL,
    "phone" VARCHAR(20),
    "photo" JSONB,

    CONSTRAINT "member_pkey" PRIMARY KEY ("member_id")
);

-- CreateTable
CREATE TABLE "news" (
    "news_id" VARCHAR(10) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "des" TEXT NOT NULL,
    "create_time" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "image" JSONB,

    CONSTRAINT "news_pkey" PRIMARY KEY ("news_id")
);

-- CreateTable
CREATE TABLE "order_info" (
    "order_info_id" VARCHAR(191) NOT NULL,
    "order_id" VARCHAR(191) NOT NULL,
    "customer" VARCHAR(191) NOT NULL,
    "phone_number" VARCHAR(191) NOT NULL,
    "address" VARCHAR(191) NOT NULL,
    "payment_method" VARCHAR(10) NOT NULL,

    CONSTRAINT "order_info_pkey" PRIMARY KEY ("order_info_id")
);

-- CreateTable
CREATE TABLE "order_item" (
    "order_item_id" VARCHAR(191) NOT NULL,
    "order_id" VARCHAR(191) NOT NULL,
    "room_id" VARCHAR(191),
    "ticket_id" VARCHAR(191),
    "check_in_date" TIMESTAMP(3),
    "check_out_date" TIMESTAMP(3),
    "people_count" INTEGER,
    "quantity" INTEGER NOT NULL,
    "booked_date" TIMESTAMP(3),
    "valid_date" TIMESTAMP(3),

    CONSTRAINT "order_item_pkey" PRIMARY KEY ("order_item_id")
);

-- CreateTable
CREATE TABLE "restaurant_menu" (
    "restaurant_menu_id" SERIAL NOT NULL,
    "facility_id" VARCHAR(20),
    "menu_item" VARCHAR(255) NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,

    CONSTRAINT "restaurant_menu_pkey" PRIMARY KEY ("restaurant_menu_id")
);

-- CreateTable
CREATE TABLE "room" (
    "room_id" VARCHAR(191) NOT NULL,
    "room_type" VARCHAR(191) NOT NULL,
    "bed_count" INTEGER NOT NULL DEFAULT 2,
    "description" VARCHAR(191),
    "price" INTEGER NOT NULL,
    "available" BOOLEAN NOT NULL,
    "capacity" INTEGER NOT NULL DEFAULT 2,
    "img" JSONB,

    CONSTRAINT "room_pkey" PRIMARY KEY ("room_id")
);

-- CreateTable
CREATE TABLE "ticket" (
    "ticket_id" VARCHAR(191) NOT NULL,
    "type" VARCHAR(191) NOT NULL,
    "price" INTEGER NOT NULL,
    "img" JSONB,

    CONSTRAINT "ticket_pkey" PRIMARY KEY ("ticket_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "member_account_key" ON "member"("account");

-- CreateIndex
CREATE UNIQUE INDEX "order_info_order_id_key" ON "order_info"("order_id");

-- AddForeignKey
ALTER TABLE "credit_card" ADD CONSTRAINT "credit_card_member_id_fkey" FOREIGN KEY ("member_id") REFERENCES "member"("member_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "customer_order" ADD CONSTRAINT "customer_order_member_id_fkey" FOREIGN KEY ("member_id") REFERENCES "member"("member_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "facility_rule" ADD CONSTRAINT "facility_rule_facility_id_fkey" FOREIGN KEY ("facility_id") REFERENCES "facility"("facility_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "order_info" ADD CONSTRAINT "order_info_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "customer_order"("order_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "order_item" ADD CONSTRAINT "order_item_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "customer_order"("order_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "order_item" ADD CONSTRAINT "order_item_room_id_fkey" FOREIGN KEY ("room_id") REFERENCES "room"("room_id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "order_item" ADD CONSTRAINT "order_item_ticket_id_fkey" FOREIGN KEY ("ticket_id") REFERENCES "ticket"("ticket_id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "restaurant_menu" ADD CONSTRAINT "restaurant_menu_facility_id_fkey" FOREIGN KEY ("facility_id") REFERENCES "facility"("facility_id") ON DELETE NO ACTION ON UPDATE NO ACTION;
