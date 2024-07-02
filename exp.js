const express = require('express');
const app=express();
const db=require("./db");
require('dotenv').config();

const Product=require('./Models/Product');
const PORT=process.env.PORT || 3000

const bodyparser=require('body-parser');
app.use(bodyparser.json());//stored in req.body

app.get('/',function(req,res) {
    res.send("Hello Sir..!How can we help you.?")
})

app.get('/shoe',function(req,res){
    var customized_shoe={
        size:"UK 8",
        name:"Nike Air Jordan",
        is_socks:false,
        color:"Panda(B/W)",
        price:"5000$USD"
    }
    res.send(customized_shoe)
})

app.get('/tshirt',function(req,res){
    res.send("Sure Sir,these are the T-Shirt Collections!!")
})

app.get('/shirt',function(req,res){
    res.send("Sure Sir,these are the Shirt Collections!!")
})

app.post('/tshirt',(req,res)=>{
    res.send("Data Saved");
})


const productRoutes=require('./Routes/productRoutes');
const personRoutes=require('./Routes/personRoutes');

app.use('/product',productRoutes);
app.use('/person',personRoutes);


app.listen(PORT,function(){
    console.log("Listening On Port 9000")
});