const express = require('express');
const app = express();
const env = require("dotenv").config();
const path = require('path');
const nocache = require('nocache')
const db = require("./Database/db");
db();

const userRouter = require('./route/user')

app.use(nocache());
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

app.use('/user',userRouter);


app.get('/admin/login',(req,res) => {
    res.render('admin/adminLogin')
})



app.listen(process.env.PORT, () => {
    console.log("server running in the 5000");
})

