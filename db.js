const mongoose=require('mongoose');
require('dotenv').config();


//Define the MongoDB Connection Url
// const mongoURL=process.env.MONGODB_LOCAL_URL //mydatabase is a database name which could be changed
const mongoURL=process.env.MONGODB_URL;

mongoose.connect(mongoURL);

const db=mongoose.connection;

db.on('connected',()=>{
    console.log('Connected to MongooDB Server....');
})

db.on('disconnected',()=>{
    console.log('Disconnected from MongoDb Server....');
})

db.on('error',(err)=>{
    console.log('Error Oncurred in MongoDb Connection....',err);
})

module.exports=db;