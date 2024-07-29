
假用戶

INSERT INTO Member (member_id, img_url, first_name, last_name, address, birth_date, email, password)
VALUES
(1, 'https://randomuser.me/api/portraits/men/1.jpg', '伟', '王', '北京市海淀区某街道1号', '1980-01-01', 'wei.wang@example.com', 'password123'),
(UUID(), 'https://randomuser.me/api/portraits/women/2.jpg', '芳', '李', '上海市徐汇区某街道2号', '1990-02-02', 'fang.li@example.com', 'password123'),
(UUID(), 'https://randomuser.me/api/portraits/men/3.jpg', '磊', '张', '广州市天河区某街道3号', '1985-03-03', 'lei.zhang@example.com', 'password123'),
(UUID(), 'https://randomuser.me/api/portraits/women/4.jpg', '静', '刘', '深圳市福田区某街道4号', '1995-04-04', 'jing.liu@example.com', 'password123'),
(UUID(), 'https://randomuser.me/api/portraits/men/5.jpg', '强', '陈', '成都市锦江区某街道5号', '1975-05-05', 'qiang.chen@example.com', 'password123');


--假票

INSERT INTO Ticket (ticket_id, type, price, img)
VALUES
(1, '一般票', FLOOR(RAND() * 500 + 50), '{"url": "https://example.com/ticket1.jpg"}'),
(2, 'VIP票', FLOOR(RAND() * 500 + 50), '{"url": "https://example.com/ticket2.jpg"}'),






-- 假房間

INSERT INTO Room (room_id, room_type, bed_count, `desc`, price, available, capacity, img)
VALUES
(1, '单人房', FLOOR(RAND() * 5 + 1), '舒适的单人房', FLOOR(RAND() * 1000 + 100), 1, FLOOR(RAND() * 3 + 1), '{"url": "https://example.com/image1.jpg"}'),
(2, '双人房', FLOOR(RAND() * 5 + 1), '宽敞的双人房', FLOOR(RAND() * 1000 + 100), 1, FLOOR(RAND() * 4 + 2), '{"url": "https://example.com/image2.jpg"}'),
(3, '套房', FLOOR(RAND() * 5 + 1), '豪华的套房', FLOOR(RAND() * 1500 + 500), 1, FLOOR(RAND() * 5 + 3), '{"url": "https://example.com/image3.jpg"}'),
(4, '家庭房', FLOOR(RAND() * 5 + 1), '适合家庭的房间', FLOOR(RAND() * 1200 + 300), 1, FLOOR(RAND() * 6 + 4), '{"url": "https://example.com/image4.jpg"}'),
(5, '豪华房', FLOOR(RAND() * 5 + 1), '高档豪华房', FLOOR(RAND() * 2000 + 800), 1, FLOOR(RAND() * 7 + 5), '{"url": "https://example.com/image5.jpg"}');



--假購物車 

INSERT INTO `Order` (order_id, member_id, total_amount, status, order_date)
VALUES
(UUID(), 'actual_member_id_1', FLOOR(RAND() * 1000 + 100), 'CREATED')




--假購物車資料

INSERT INTO OrderItem (order_item_id, order_id, room_id, ticket_id, check_in_date, check_out_date, people_count, quantity, booked_date, valid_date) VALUES (UUID(), 'order_id_2', '5', NULL, NOW() - INTERVAL 3 DAY, NOW() + INTERVAL 2 DAY, 2, 1, NOW() - INTERVAL 5 DAY, NOW() + INTERVAL 7 DAY), (UUID(), 'order_id_1', NULL, '2', NULL, NULL, NULL, 3, NOW() - INTERVAL 10 DAY, NOW() + INTERVAL 5 DAY);