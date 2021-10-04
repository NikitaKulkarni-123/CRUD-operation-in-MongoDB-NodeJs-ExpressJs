function Createconnection()
{
    const mongoose = require('mongoose');
  return  mongoose.connect('mongodb://localhost:27017/expressjs-demo-studentdb',{
    useNewurlParser:true,
    useUnifiedTopology:true,
    }
    );
}

module.exports={ Createconnection };