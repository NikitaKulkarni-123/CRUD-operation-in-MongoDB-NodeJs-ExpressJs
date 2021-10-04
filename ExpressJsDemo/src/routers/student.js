const express=require('express');
const{Student}=require('../models/student');
const{createStudentForm,AddStudent,ShowAllStudents}=require('../controllers/student');
const studentrouter=express.Router();
studentrouter.get("/add-student",createStudentForm);
studentrouter.post("/add-student",AddStudent);
studentrouter.get("/all-students",ShowAllStudents);
module.exports={studentrouter};
    //Using async-await  
    // studentrouter.get("/all-students",async(req,res)=>{  
    //     let view=req.query.view || "card"; 
    //      const students= await Student.find();              
    //           res.render("all-students",{students,view});
    //       });
        
 // app.get("/generated-students/:count",(req,res)=>{ //: defines the number that how many students u want to generate?
 //     const count= +req.params.count;  
 //     const view=req.query.view || "card";               //+ convers string into number
 //     const students=generateStudent(count);
 //     res.render("generated-students",{students,view});
    
 // });
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