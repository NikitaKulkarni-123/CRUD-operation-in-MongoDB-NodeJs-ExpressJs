const express=require('express');
const app=express();
const initializedApp=require('./app');
initializedApp(app);
app.listen(3000,()=>
{
    console.log("Application is listening on port 3000");
});