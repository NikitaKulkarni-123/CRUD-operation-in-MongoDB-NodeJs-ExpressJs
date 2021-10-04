const mongoose=require('mongoose');
const {Schema}=mongoose;
const{Types:{String,Number}}=Schema; //extracting schema object
const studentSchema=new Schema({
    firstName:String,
    lastName:String,
    email:String,
    age:Number,
});
const Student=mongoose.model('Student',studentSchema); //creating model(Student is collection name)
module.exports={Student};