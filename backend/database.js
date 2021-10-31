const express = require('express')
const app = express()
const mongoose = require('mongoose');
const dotenv = require('dotenv')

require('dotenv').config();

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, () =>console.log("Database connected"))

app.listen(4000, () => console.log("server is up and running"))