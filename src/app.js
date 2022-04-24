const express = require('express');

const app = express();

const index = require('./routers/index');
const authRoute = require('./routers/authRoutes')
const restoRoute = require('./routers/restaurantRoutes')
const trxRoute = require('./routers/trxRoutes')
const userRoute = require('./routers/userRoutes')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(index);
app.use('/api/', authRoute);
app.use('/api/', restoRoute )
app.use('/api/', trxRoute )
app.use('/api/', userRoute )

module.exports = app;
