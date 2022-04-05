const mongoose = require("mongoose");
const drugsSchema = new mongoose.Schema({
  medName: { type: String },
  Prescription: { type: String },
  typeofsell: { type: String },
  Manufacturer: { type: String },
  Salt: { type: String },
  MRP: { type: String },
  Uses: { type: String },
  altMed: { type: String },
  sideEffects: { type: String },
  howtouse: { type: String },
  chemicalClass: { type: String },
  HabitForming: { type: String },
  therapeuticClass: { type: String },
  actionClass: { type: String },
});
module.exports = mongoose.model("drugs", drugsSchema);
