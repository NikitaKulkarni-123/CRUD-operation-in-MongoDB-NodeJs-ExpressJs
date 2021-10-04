const express=require('express');

module.exports=(app)=>
{
    const swig=require('swig'); //swig is template language to render the html .
    // const { generateStudent } = require('./utils');
    const { Createconnection } = require('./db');
    // const {Student}=require('./models/student');
    // const faker=require('faker');
    const {homerouter}=require('./routers');
    const{APIRouter}=require('./routers/API/student');
    const{studentrouter}=require('./routers/student');
    
    // console.log(generateStudent(10));
    Createconnection().then
    (()=>{
        console.log("mongo db connected.....")
    }); 
    // const students=[];
    swig.setDefaults({
        cache:false,
    });

    app.engine("html",swig.renderFile);//file extension is html
    app.use(express.urlencoded({extended: false}));
    app.set("views","src/views");
    app.set("view engine","html");
    app.use(homerouter);
    app.use(studentrouter);
    app.use("/api",APIRouter); 
    //its is middleware reads data from user and convert into json
    
}


