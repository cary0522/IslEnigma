const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
// const bookHotel_router = require('./routes/bookHotel_routes');
const member_router = require('./routes/member_routes');
const app = express();
const port = 8080;

app.use(cors({ credentials: true, origin: ['http://localhost:59281', 'http://127.0.0.1:59281'] }));
app.use(cookieParser());
app.use(express.json()); 
app.use('/member', member_router);
// app.use('/bookHotel',bookHotel_router);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});