const mongoose=require('mongoose');

//Define the MongoDB Connection Url
const mongoURL='mongodb://localhost:27017/store' //mydatabase is a database name which could be changed

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