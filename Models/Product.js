const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
     product_name:{
        type:String,
        required:true
     },
     price:{
        type:Number,
        required:true
     },
     rating:{
        type:Number,
        min:[0,'Min Rating could be 0 Star'],
        max:[5,'Max Rating could be 5 Star']
     },
     p_type:{
        type:String,
        enum:['grocery','cloths','footwear','food','electronic','entertainment'],
        required:true
     },
     manufacturer:{
        type:[String],
        required:true
     }
})

const Product=new mongoose.model('Product',productSchema);
module.exports=Product;