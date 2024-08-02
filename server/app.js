const express = require('express');
const cookieParser = require('cookie-parser');
// const bookHotel_router = require('./routes/bookHotel_routes');
// const bookTicket_router = require('./routes/bookTicket_routes');
const member_router = require('./routes/member_routes');
const app = express();
const port = 8080;

app.use(cookieParser());
app.use(express.json()); 
app.use('/member', member_router);
// app.use('/bookHotel',bookHotel_router);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});