const mongoose = require('mongoose');


const connectDB = async ()=>{
 const URL=`${process.env.MONGODBURL}`;
 const conn= await mongoose.connect(URL,{
     useNewUrlParser:true,
     useUnifiedTopology: true
 });

 console.log(`MongoDB Connected: ${conn.connection.host}`)
}

module.exports = connectDB;