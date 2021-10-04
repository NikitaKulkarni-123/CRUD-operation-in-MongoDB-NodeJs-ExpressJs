const {Student}=require('../models/student');
const AddStudent=(req,res)=>{
    const data=req.body;
    Student.create(data).then((data)=>{
     res.render("add-student",{message:"Student Added Sucessfully"});
    }) ;
};
const ShowAllStudents=(req,res)=>{
    let view=req.query.view || "card"; 
    Student.find().then((students)=>{
         res.render("all-students",{students,view});
     });
};
const createStudentForm=(req,res)=>{
res.render("add-student");
};
module.exports={createStudentForm,AddStudent,ShowAllStudents};

