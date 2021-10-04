 const{Student}=require('../../models/student');
 const express=require('express');
const { Console } = require('console');
 const APIRouter=express.Router();
APIRouter.get("/students",(req,res)=>{

Student.find().then(students=>{
     res.json({students});
 });
});

//to sort data
APIRouter.get("/students",(req,res)=>{

    Student.find().sort('age').then(students=>{
        res.json({students});
    });
    });
module.exports={APIRouter};