const express = require('express');
const db = require('./db');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todo'); // 確保路徑正確
const app = express();
const port = 8080;

// 設置視圖引擎為 ejs
app.set('view engine', 'ejs');

// 使用 bodyParser 中間件
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// 掛載 todo 路由
app.use('/todo', todoRoutes);

// 根路由重定向到 /todo
app.get('/', (req, res) => res.redirect('/todo'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});