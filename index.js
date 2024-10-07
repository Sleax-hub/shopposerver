const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express();

app.use(cors());
app.use(express.json());

// get initial route
app.get('/', (req, res) => {
    res.send('server running')
})

// define server port and database url
const port = 5000;
const dbconnection = "mongodb+srv://sleaxacademy:admin@shopposerver.zm6mx.mongodb.net/?retryWrites=true&w=majority&appName=shopposerver"

// listen on pserver ports
app.listen(port, (req, res) => {
    console.log(`server running on port ${port}`)
})

// create db connection
mongoose.connect(dbconnection, {useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log('Connected to MongoDB')
})
.catch((error)=>{
    console.error('Error connecting to MongoDB', error)
})

// add routes

const userroutes = require('./routes/UserRoute')

// api routes
app.use('/api/v1/users',userroutes);


// add routes
const productroutes = require('./routes/ProductRoute')

//api routes
app.use('/api/v1/products',productroutes);