const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/expressjs-demo',{
useNewurlParser:true,
useUnifiedTopology:true,
}).then(()=>{
    console.log("mongodb connected")});

    const courceSchema={             //created collection
  title:String,
  author:String,
  courceId:Number
    }
    const COURCE=mongoose.model("cource",courceSchema);    //create schemma
    
    //*********************************************************************************************************** */
   // Function to save data in mongodb
   function CreateCource(title,author,courceId){
           const c=new COURCE({                  //created object of class
             title,
             author,
            courceId
});
       c.save().then((c)=>{ 
          console.log({c})});
           }
 CreateCource("Node","Virendra",123);
//*****************************************************************************************************************

 //Function to retriev  particular data in mongodb
 function RetrivefilterCources(){
COURCE.find({courceId:123}).then(cources=>{
    console.log(cources);
});
 }
//*************************************************************************************************************** */
  //Function to retriev data in mongodb
function RetriveCources(){
  COURCE.find().then(cources=>{
   console.log(cources);
});
}
//*********************************************************************************************************** */
    //update data
    COURCE.updateOne(
        {_id:'615954bae20c676b67639885'},
        {
        $set:{
            author:"mugdha",
        },
    
    }
    ).then((result)=>{
        console.log(result)
    });

//****************************************************************** */
//Delete data
    COURCE.deleteOne( {_id:'615954bae20c676b67639885'}).then((result=>{
        console.log(result);
    }));
    //******************************************************************** */