const express=require('express');
const {showHomePage}=require('../controllers/home');
const { APIRouter } = require('./API/student');
const homerouter=express.Router();

homerouter.get("/",showHomePage);

module.exports={homerouter};
 //it is middleware reads data from user and convert into json


//using async await
// app.post("/add-student",async(req,res)=>{
//     const data=req.body;
//     try{
//    const students=await Student.create(data);
//     res.render("add-student",{message:"Student Added Sucessfully"});
//     }
//     catch(err)
//     {
//         const err=Object.values(err.errors[0].properties.message);
//         res.render("add-student",{err});
//     }
//    });
    

  