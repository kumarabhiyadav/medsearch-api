const express = require("express");
const connectDB = require('./connection')
const dotenv = require("dotenv");


dotenv.config();
console.log(`Your port is ${process.env.PORT}`);
console.log(`Your port is ${process.env.MONGODBURL}`);


connectDB();


const PORT = 3000;



const drugs= require('./routes/drugs.routes');
const otc= require('./routes/otc.routes');

const app = express();
app.use(express.json());






app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api/drugs', drugs);
app.use('/api/otc',otc);
const server = app.listen(PORT, console.log(`Server Listening on : ${PORT}`));