const express = require('express')
// const bodyParser = require('body-parser');
const colors = require('colors')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const port = process.env.PORT || 5000
const { errorHandler } = require('./middleware/errorMiddleware');

connectDB()
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(express.json({extended: false})); 
// app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/attendances', require('./routes/attendanceRoutes'))
app.use(errorHandler);
app.listen(port, () => console.log(`serving port ${port}`))