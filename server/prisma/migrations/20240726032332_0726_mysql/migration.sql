-- CreateTable
CREATE TABLE `Member` (
    `member_id` VARCHAR(191) NOT NULL,
    `img_url` VARCHAR(191) NOT NULL,
    `first_name` VARCHAR(191) NOT NULL,
    `last_name` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `birth_date` DATETIME(3) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`member_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Room` (
    `room_id` VARCHAR(191) NOT NULL,
    `room_type` VARCHAR(191) NOT NULL,
    `bed_count` INTEGER NOT NULL DEFAULT 2,
    `desc` VARCHAR(191) NULL,
    `price` INTEGER NOT NULL,
    `available` BOOLEAN NOT NULL,
    `capacity` INTEGER NOT NULL DEFAULT 2,
    `img` JSON NULL,

    PRIMARY KEY (`room_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ticket` (
    `ticket_id` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `price` INTEGER NOT NULL,
    `img` JSON NULL,

    PRIMARY KEY (`ticket_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Order` (
    `order_id` VARCHAR(191) NOT NULL,
    `member_id` VARCHAR(191) NOT NULL,
    `total_amount` INTEGER NOT NULL,
    `status` ENUM('CREATED', 'PAID') NOT NULL,
    `order_date` DATETIME(3) NOT NULL,

    PRIMARY KEY (`order_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OrderItem` (
    `order_item_id` VARCHAR(191) NOT NULL,
    `order_id` VARCHAR(191) NOT NULL,
    `room_id` VARCHAR(191) NULL,
    `ticket_id` VARCHAR(191) NULL,
    `check_in_date` DATETIME(3) NULL,
    `check_out_date` DATETIME(3) NULL,
    `people_count` INTEGER NULL,
    `quantity` INTEGER NOT NULL,
    `booked_date` DATETIME(3) NULL,
    `valid_date` DATETIME(3) NULL,

    PRIMARY KEY (`order_item_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OrderInfo` (
    `order_info_id` VARCHAR(191) NOT NULL,
    `order_id` VARCHAR(191) NOT NULL,
    `customer` VARCHAR(191) NOT NULL,
    `phone_number` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `payment_method` ENUM('PAYPAL', 'CREDITCARD') NOT NULL,

    UNIQUE INDEX `OrderInfo_order_id_key`(`order_id`),
    PRIMARY KEY (`order_info_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_member_id_fkey` FOREIGN KEY (`member_id`) REFERENCES `Member`(`member_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrderItem` ADD CONSTRAINT `OrderItem_order_id_fkey` FOREIGN KEY (`order_id`) REFERENCES `Order`(`order_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrderItem` ADD CONSTRAINT `OrderItem_room_id_fkey` FOREIGN KEY (`room_id`) REFERENCES `Room`(`room_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrderItem` ADD CONSTRAINT `OrderItem_ticket_id_fkey` FOREIGN KEY (`ticket_id`) REFERENCES `Ticket`(`ticket_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrderInfo` ADD CONSTRAINT `OrderInfo_order_id_fkey` FOREIGN KEY (`order_id`) REFERENCES `Order`(`order_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
