const express = require('express');
const cookieParser = require('cookie-parser');
const register_router = require('./routes/register_routes');
const login_router = require('./routes/login_routes');
const forgetPassword_router = require('./routes/forgetPassword_routes');
const logout_router = require('./routes/logout_routes');
const memberInfo_router = require('./routes/memberInfo_routes');
const bookHotel_router = require('./routes/bookHotel_routes');
const bookTicket_router = require('./routes/bookTicket_routes');
const app = express();
const port = 8080;

app.use(cookieParser());
app.use(express.json()); 
app.use('/register', register_router);
app.use('/login', login_router);
app.use('/bookHotel',bookHotel_router);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});