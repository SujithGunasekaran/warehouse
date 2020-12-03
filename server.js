var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
const dotenv = require('dotenv');
var app = express();
var path = require('path');

dotenv.config();

var PORT = process.env.PORT || 5000;

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`)
})

app.use(express.json())
app.use(cors())


const uri = process.env.MongoURI;
mongoose.connect(uri,{useNewUrlParser : true, useCreateIndex : true, useUnifiedTopology : true})

var connection = mongoose.connection;
connection.once('open',()=>{
    console.log("MongoDB Connect Successfully")
})

app.use(express.static('public'))
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

const newUserInfoRouter = require('./model/routes/userInfo');
const newUserCartRouter = require('./model/routes/userCart');

app.use('/userInfo',newUserInfoRouter);
app.use('/userCart',newUserCartRouter)

if(process.env.NODE_ENV === 'production')
{
    app.use(express.static('public'));
    app.get('*', (req,res) =>{
        res.sendFile(path.join(__dirname + '/public/index.html'));
    })
}