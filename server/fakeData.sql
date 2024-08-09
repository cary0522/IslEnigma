
--假member


INSERT INTO member (name, address, birth, account, password, phone, photo)
VALUES
('玫君姊', '台中', '1985-05-15', 'johndoe', 'hashedpassword123', '555-1234', '{"avatar": "john_doe.jpg"}');




--假購物車
INSERT INTO customer_order (order_id, member_id, total_amount, status, order_date)
VALUES
('1', 1, 100, 'CREATED', '2024-08-09 12:00:00')

--假room

INSERT INTO room (
    room_id, 
    room_type, 
    bed_count, 
    description, 
    price, 
    available, 
    capacity
)
VALUES (
    '1',       -- room_id (使用你自己的逻辑生成唯一 ID)
    '測試房間01',  -- room_type (房间类型)
    3,               -- bed_count (床位数)
    'A luxurious suite with a beautiful view.', -- description (房间描述)
    250,             -- price (价格，单位可以是你系统中定义的货币单位)
    TRUE,            -- available (是否可用)
    4       -- capacity (可容纳人数)
   
);



--假ticket

INSERT INTO ticket (
    ticket_id, 
    type, 
    price
)
VALUES (
    '1',      -- ticket_id (使用你自己的逻辑生成唯一 ID)
    'VIP票券',       -- type (票的类型，如 "VIP Pass", "Standard", 等)
    100        -- price (价格，单位可以是你系统中定义的货币单位)
 
);


--假訂單  room

    INSERT INTO order_item (
        order_item_id, 
        order_id, 
        room_id, 
        ticket_id, 
        check_in_date, 
        check_out_date, 
        people_count, 
        quantity, 
        booked_date, 
        valid_date
    )
    VALUES (
        '1',  -- order_item_id (使用你自己的逻辑生成唯一 ID)
        '1', -- order_id (关联到已有的 customer_order)
        '1',      -- room_id (可选，假设已有的 room_id)
        NULL,           -- ticket_id (可选，如果不适用，可以设为 NULL)
        '2024-08-10',   -- check_in_date (假设的入住日期)
        '2024-08-15',   -- check_out_date (假设的退房日期)
        2,              -- people_count (入住人数)
        1,              -- quantity (订购数量)
        NOW(),          -- booked_date (预订日期)
        NULL            -- valid_date (可选，如不适用，可以设为 NULL)
    );
    --假訂單  ticket


INSERT INTO order_item (
    order_item_id, 
    order_id, 
    room_id, 
    ticket_id, 
    check_in_date, 
    check_out_date, 
    people_count, 
    quantity, 
    booked_date, 
    valid_date
)
VALUES (
    '2',                    -- order_item_id (請確保這是唯一的)
    '1',                    -- order_id (需要存在於 customer_order 表中)
    NULL,                   -- room_id (如果可選，保持為 NULL)
    '1',                    -- ticket_id (如果可選，保持為 NULL 或有效 ID)
    '2024-08-10',           -- check_in_date (假設的入住日期)
    NULL,                   -- check_out_date (可選，保持為 NULL)
    NULL,                   -- people_count (可選，保持為 NULL)
    1,                      -- quantity (訂購數量)
    NOW(),                  -- booked_date (預訂日期)
    NULL                    -- valid_date (可選，保持為 NULL)
);