const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
var cors = require('cors');


app.use(cors());


dotenv.config();

// Database Connection
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true } ,() => 
    console.log('connected to db')
);

// Middleware
app.use(express.json());

const authRoute = require('./routes/auth')
const postRoute = require('./routes/posts')

app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);

app.listen(3001, () => console.log("server iss up!!!"));

