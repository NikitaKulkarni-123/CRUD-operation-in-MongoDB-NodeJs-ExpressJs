const{name,internet,random,datatype}=require('faker');
const{ firstName,lastName,gender}=name;
const{avatar,email}=internet;
const{ number }=random;
function generateStudent(count)
{
    return new Array(count).fill(0).map((item,index)=>{
  return{
      id:datatype.uuid(),
      firstName:firstName(),
     lastName:lastName(),
     gender:gender(),
     email:email(),
     age:number(45),
  };
});
  
}
module.exports={generateStudent};