const express = require('express');
const router=express.Router();

const Person=require('./../Models/Person');


//POST method to post person
router.post('/',async(req,res)=>{
    try{
        const data=req.body;//req.body contains the data

        //Create new person document using Mongoose model
        const newPerson=new Person(data);    

         //Now save newperson in data
        const response=await newPerson.save();
        console.log('Person Data Saved');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({err:'Internal Server Error'});
    } 
})

//GET method to get person
router.get('/',async(req,res)=>{
    try{
        const data=await Person.find();
        console.log("Person Data Fetched");
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({err:'Internal Server Error'});    
    }
})

//Get based parametrizd method
router.get('/:p_roles',async(req,res)=>{
    try{
        const p_roles=req.params.p_roles;
        if(p_roles=='delivery'||p_roles=='manufacturer'||p_roles=='customer'){
            const response=await Person.find({role:p_roles});
            console.log("Person Data Based On Role Fetched Successfully");
            res.status(200).json(response);
        }
        else{
            res.status(404).json({err:'Select proper Role'});
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({err:'Internal Server Error'});
    }
})

router.put('/:id',async(req,res)=>{
    try{
         const personId=req.params.id;//Extract the id from parametrized request
         const updatePersonData=req.body;//User given datato be updated

         const response=await Person.findByIdAndUpdate(personId,updatePersonData,{
            new:true,   //return the updated document
            runValidators:true,    //Run mongoose validations
         })

         if(!response){
            return res.status(404).json({error:'Person Not Found'});
         }

         console.log("Data Updated");
         res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
    }
})

router.delete('/:id',async(req,res)=>{
    try{
         const personId=req.params.id;
         
         const response=await Person.findByIdAndDelete(personId);
          
         if(!response)
        {
            res.status(404).json({error:'Already Data not Persent'})
        }

         console.log("Data Deleted  Successfully..!");
         res.status(200).json({message:'Person Deleted Successfully'});
    }
    catch(err){
        console.log({err});
        res.status(500).json({error:'Internal Server Erro'})
    }
})

//Comment Added for security purpose
module.exports=router;