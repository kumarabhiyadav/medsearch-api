const mongoose = require("mongoose");
const otcSchema = new mongoose.Schema({
    Name : {type:String},
    typeofsell : {type:String},
    Category : {type:String},
    MRP : {type:String},
    Manufacturer : {type:String}
});
module.exports = mongoose.model("otc", otcSchema);
