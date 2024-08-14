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
    "order_date" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "customer_order_pkey" PRIMARY KEY ("order_id")
);

-- CreateTable
CREATE TABLE "facility" (
    "title" VARCHAR(255) NOT NULL,
    "image" JSONB,
    "category" VARCHAR(255) NOT NULL,
    "des" TEXT,
    "content" TEXT,
    "location" VARCHAR(255) NOT NULL,
    "open_time" VARCHAR(255),
    "data_maintain" VARCHAR(255),
    "remarks" TEXT,
    "facility_class_name" VARCHAR(255) NOT NULL,
    "facility_id_name" VARCHAR(255) NOT NULL,
    "rule_others" VARCHAR(255) NOT NULL,
    "facility_id" SERIAL NOT NULL,
    "area" INTEGER NOT NULL,

    CONSTRAINT "facility_pkey" PRIMARY KEY ("facility_id")
);

-- CreateTable
CREATE TABLE "facility_rule" (
    "facility_rule_id" SERIAL NOT NULL,
    "rule_type" VARCHAR(50),
    "rule_value" VARCHAR(255),
    "facility_id" INTEGER,

    CONSTRAINT "facility_rule_pkey" PRIMARY KEY ("facility_rule_id")
);

-- CreateTable
CREATE TABLE "member" (
    "member_id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "address" VARCHAR(100),
    "account" VARCHAR(50) NOT NULL,
    "password" VARCHAR(64) NOT NULL,
    "phone" VARCHAR(20),
    "photo" VARCHAR(255),
    "birth" DATE,

    CONSTRAINT "member_pkey" PRIMARY KEY ("member_id")
);

-- CreateTable
CREATE TABLE "more_about" (
    "more_about_id" SERIAL NOT NULL,
    "more_link" TEXT NOT NULL,
    "facility_id" INTEGER NOT NULL,
    "img" JSONB,

    CONSTRAINT "more_about_pkey" PRIMARY KEY ("more_about_id")
);

-- CreateTable
CREATE TABLE "order_info" (
    "order_id" VARCHAR(191) NOT NULL,
    "customer" VARCHAR(191) NOT NULL,
    "phone_number" VARCHAR(191) NOT NULL,
    "address" VARCHAR(191) NOT NULL,
    "payment_method" VARCHAR(10) NOT NULL,
    "order_info_id" SERIAL NOT NULL,

    CONSTRAINT "order_info_pkey" PRIMARY KEY ("order_info_id")
);

-- CreateTable
CREATE TABLE "order_item" (
    "order_item_id" VARCHAR(191) NOT NULL,
    "order_id" VARCHAR(191) NOT NULL,
    "check_in_date" TIMESTAMP(6),
    "check_out_date" TIMESTAMP(6),
    "people_count" INTEGER,
    "quantity" INTEGER NOT NULL,
    "booked_date" TIMESTAMP(6),
    "valid_date" TIMESTAMP(6),
    "room_id" INTEGER,
    "ticket_id" INTEGER,

    CONSTRAINT "order_item_pkey" PRIMARY KEY ("order_item_id")
);

-- CreateTable
CREATE TABLE "room" (
    "room_type" VARCHAR(191) NOT NULL,
    "description" VARCHAR(191),
    "price" INTEGER NOT NULL,
    "capacity" INTEGER NOT NULL DEFAULT 2,
    "img" JSONB,
    "room_count" INTEGER NOT NULL DEFAULT 2,
    "room_id" SERIAL NOT NULL,

    CONSTRAINT "room_pkey" PRIMARY KEY ("room_id")
);

-- CreateTable
CREATE TABLE "ticket" (
    "type" VARCHAR(100) NOT NULL,
    "price" INTEGER NOT NULL,
    "img" JSONB,
    "ticket_id" SERIAL NOT NULL,

    CONSTRAINT "ticket_pkey" PRIMARY KEY ("ticket_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "member_account_key" ON "member"("account");

-- CreateIndex
CREATE UNIQUE INDEX "order_info_order_id_key" ON "order_info"("order_id");

-- AddForeignKey
ALTER TABLE "credit_card" ADD CONSTRAINT "fk_credit_card_member" FOREIGN KEY ("member_id") REFERENCES "member"("member_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "customer_order" ADD CONSTRAINT "fk_customer_order_member" FOREIGN KEY ("member_id") REFERENCES "member"("member_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "facility_rule" ADD CONSTRAINT "fk_facility_rule_facility" FOREIGN KEY ("facility_id") REFERENCES "facility"("facility_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "more_about" ADD CONSTRAINT "fk_more_about_facility" FOREIGN KEY ("facility_id") REFERENCES "facility"("facility_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "order_info" ADD CONSTRAINT "fk_order_info_customer_order" FOREIGN KEY ("order_id") REFERENCES "customer_order"("order_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "order_item" ADD CONSTRAINT "fk_order_item_customer_order" FOREIGN KEY ("order_id") REFERENCES "customer_order"("order_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "order_item" ADD CONSTRAINT "fk_order_item_room" FOREIGN KEY ("room_id") REFERENCES "room"("room_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "order_item" ADD CONSTRAINT "fk_order_item_ticket" FOREIGN KEY ("ticket_id") REFERENCES "ticket"("ticket_id") ON DELETE NO ACTION ON UPDATE NO ACTION;
