const mongoose=require('mongoose');

//Define person schema
const personSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },
    role:{
       type:String,
       enum:['delivery','manufacturer','customer'],
       required:true
    },
    p_name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    dd:{
       type:Date,
       required:true
    },
    mobile:{
       type:Number,
       unique:true
    },
    delivery_done:{
        type:Boolean,
        required:true
    }
});

//Create Person Model
const Person=new mongoose.model('Person',personSchema);
module.exports=Person;