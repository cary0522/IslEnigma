-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('CREATED', 'PAID');

-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('PAYPAL', 'CREDITCARD');

-- CreateTable
CREATE TABLE "Member" (
    "member_id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "address" VARCHAR(100),
    "birth" TIMESTAMP(3),
    "account" VARCHAR(50) NOT NULL,
    "password" CHAR(64) NOT NULL,
    "phone" VARCHAR(20),
    "photo" JSONB,

    CONSTRAINT "Member_pkey" PRIMARY KEY ("member_id")
);

-- CreateTable
CREATE TABLE "Room" (
    "room_id" VARCHAR(191) NOT NULL,
    "room_type" VARCHAR(191) NOT NULL,
    "bed_count" INTEGER NOT NULL DEFAULT 2, 
    "description" VARCHAR(191),
    "price" INTEGER NOT NULL,
    "available" BOOLEAN NOT NULL,
    "capacity" INTEGER NOT NULL DEFAULT 2,
    "img" JSONB,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("room_id")
);

-- CreateTable
CREATE TABLE "Ticket" (
    "ticket_id" VARCHAR(191) NOT NULL,
    "type" VARCHAR(191) NOT NULL,
    "price" INTEGER NOT NULL,
    "img" JSONB,

    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("ticket_id")
);

-- CreateTable
CREATE TABLE "Order" (
    "order_id" VARCHAR(191) NOT NULL,
    "member_id" INTEGER NOT NULL,
    "total_amount" INTEGER NOT NULL,
    "status" "OrderStatus" NOT NULL,
    "order_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("order_id")
);

-- CreateTable
CREATE TABLE "OrderItem" (
    "order_item_id" VARCHAR(191) NOT NULL,
    "order_id" TEXT NOT NULL,
    "room_id" TEXT,
    "ticket_id" TEXT,
    "check_in_date" TIMESTAMP(3),
    "check_out_date" TIMESTAMP(3),
    "people_count" INTEGER,
    "quantity" INTEGER NOT NULL,
    "booked_date" TIMESTAMP(3),
    "valid_date" TIMESTAMP(3),

    CONSTRAINT "OrderItem_pkey" PRIMARY KEY ("order_item_id")
);

-- CreateTable
CREATE TABLE "OrderInfo" (
    "order_info_id" VARCHAR(191) NOT NULL,
    "order_id" TEXT NOT NULL,
    "customer" VARCHAR(191) NOT NULL,
    "phone_number" VARCHAR(191) NOT NULL,
    "address" VARCHAR(191) NOT NULL,
    "payment_method" "PaymentMethod" NOT NULL,

    CONSTRAINT "OrderInfo_pkey" PRIMARY KEY ("order_info_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Member_account_key" ON "Member"("account");

-- CreateIndex
CREATE UNIQUE INDEX "OrderInfo_order_id_key" ON "OrderInfo"("order_id");

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_member_id_fkey" FOREIGN KEY ("member_id") REFERENCES "Member"("member_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "Order"("order_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_room_id_fkey" FOREIGN KEY ("room_id") REFERENCES "Room"("room_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_ticket_id_fkey" FOREIGN KEY ("ticket_id") REFERENCES "Ticket"("ticket_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderInfo" ADD CONSTRAINT "OrderInfo_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "Order"("order_id") ON DELETE RESTRICT ON UPDATE CASCADE;
