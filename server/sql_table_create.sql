CREATE TABLE news (
    news_id VARCHAR(10) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    des TEXT,
    create_time TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    image JSONB
);

CREATE TABLE  facility (
    facility_id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    image JSONB,
    category VARCHAR(255),
    des TEXT,
    content TEXT,
    area VARCHAR(255),
    location VARCHAR(255),
    open_time VARCHAR(255),
    data_maintain DATE,
   class_name VARCHAR(255),
    remarks TEXT
);

CREATE TABLE facility_rule (
    facility_rule_id SERIAL PRIMARY KEY, --SERIAL就是AUTO_INCREMENT
    facility_id VARCHAR(255),
    rule_type VARCHAR(50),
    rule_value VARCHAR(255),
    FOREIGN KEY (facility_id) REFERENCES facility(facility_id)
);

CREATE TABLE restaurant_menu (
    restaurant_menu_id SERIAL PRIMARY KEY,
    facility_id VARCHAR(20),
    menu_item VARCHAR(255),
    price NUMERIC(10, 2),
    FOREIGN KEY (facility_id) REFERENCES facility(facility_id)
);

CREATE TABLE event (
    event_id VARCHAR(255) PRIMARY KEY,
    type VARCHAR(100) NOT NULL,
    title VARCHAR(255) NOT NULL,
    content TEXT,
    publish_time TIMESTAMP WITH TIME ZONE DEFAULT ,
    start_time TIMESTAMP WITH TIME ZONE NOT NULL,
    end_time TIMESTAMP WITH TIME ZONE NOT NULL,
    image JSONB,
    session VARCHAR(100),
    location VARCHAR(255)
);

CREATE TABLE member (
    member_id SERIAL PRIMARY KEY,
   name VARCHAR(50) NOT NULL,
   address VARCHAR(100),
   birth DATE,
    account VARCHAR(50) UNIQUE NOT NULL,
    password CHAR(64) NOT NULL,
    phone VARCHAR(20),
    photo JSONB
);

CREATE TABLE credit_card (
    credit_card_id SERIAL PRIMARY KEY,
    member_id INTEGER REFERENCES member(member_id),
    number VARCHAR(16) NOT NULL,
    expiry DATE NOT NULL,
    cvv VARCHAR(4) NOT NULL
);

-- CreateTable
CREATE TABLE room (
    room_id VARCHAR(191) NOT NULL,
    room_type VARCHAR(191) NOT NULL,
    bed_count INTEGER NOT NULL DEFAULT 2,
    description VARCHAR(191),
    price INTEGER NOT NULL,
    available BOOLEAN NOT NULL,
    capacity INTEGER NOT NULL DEFAULT 2,
    img JSON,

    PRIMARY KEY (room_id)
);

-- CreateTable
CREATE TABLE ticket (
    ticket_id VARCHAR(191) NOT NULL,
    type VARCHAR(191) NOT NULL,
    price INTEGER NOT NULL,
    img JSON,

    PRIMARY KEY (ticket_id)
);

-- CreateTable
CREATE TABLE order (
    order_id VARCHAR(191) NOT NULL,
    member_id VARCHAR(191) NOT NULL,
    total_amount INTEGER NOT NULL,
    status VARCHAR(7) CHECK (status IN ('CREATED', 'PAID')) NOT NULL,
    order_date TIMESTAMP(3) NOT NULL,

    PRIMARY KEY (order_id)
);

-- CreateTable
CREATE TABLE order_item (
    order_item_id VARCHAR(191) NOT NULL,
    order_id VARCHAR(191) NOT NULL,
    room_id VARCHAR(191),
    ticket_id VARCHAR(191),
    check_in_date TIMESTAMP(3),
    check_out_date TIMESTAMP(3),
    people_count INTEGER,
    quantity INTEGER NOT NULL,
    booked_date TIMESTAMP(3),
    valid_date TIMESTAMP(3),

    PRIMARY KEY (order_item_id)
);

-- CreateTable
CREATE TABLE order_info (
    order_info_id VARCHAR(191) NOT NULL,
    order_id VARCHAR(191) NOT NULL,
    customer VARCHAR(191) NOT NULL,
    phone_number VARCHAR(191) NOT NULL,
    address VARCHAR(191) NOT NULL,
    payment_method VARCHAR(10) CHECK (payment_method IN ('PAYPAL', 'CREDITCARD')) NOT NULL,

    UNIQUE (order_id),
    PRIMARY KEY (order_info_id)
);

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT order_member_id_fkey FOREIGN KEY (member_id) REFERENCES member(member_id) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE order_item ADD CONSTRAINT order_item_order_id_fkey FOREIGN KEY (order_id) REFERENCES "order"(order_id) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE order_item ADD CONSTRAINT order_item_room_id_fkey FOREIGN KEY (room_id) REFERENCES room(room_id) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE order_item ADD CONSTRAINT order_item_ticket_id_fkey FOREIGN KEY (ticket_id) REFERENCES ticket(ticket_id) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE order_info ADD CONSTRAINT order_info_order_id_fkey FOREIGN KEY (order_id) REFERENCES "order"(order_id) ON DELETE RESTRICT ON UPDATE CASCADE;
