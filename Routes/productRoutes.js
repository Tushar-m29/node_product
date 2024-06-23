const express=require('express');
const router=express.Router();

const Product=require('./../Models/Product');

router.post('/',async(req,res)=>{
    try{
        const data=req.body;
        const newProduct=new Product(data);

        const res_pro=await newProduct.save();
        console.log("Product Data Saved Successfully");
        res.status(200).json(res_pro);
    }
    catch(err){
        console.log(err);
        res.status(500).json({err:'Internal Server Error'});   
    }
})

router.get('/',async(req,res)=>{
    try{
        const data=await Product.find();
        console.log("Product Data Fetched");
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({err:'Internal Server Error'})
    }
})

router.get('/:pro_type',async(req,res)=>{
    try{
        const pro_type=req.params.pro_type;
        if(pro_type=='grocery'||pro_type=='cloths'||pro_type=='footwear'||pro_type=='food'||pro_type=='entertainment'){
            const response = await Product.find({p_type: pro_type});
            console.log("Response Fetched Successflly");
            res.status(200).json(response);
        }
        else{
            res.status(404).json({err:"Enter the correct Product Type"});
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({err:"Internal Server Error"});
    }
})

module.exports=router;