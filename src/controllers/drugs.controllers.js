const drugs = require("../models/drugs");

exports.searchDrugs = async (req, res) => {
  const result = await drugs.find({ medName: {$regex:req.body.query} });
  res.status(200).json({ success: true, count:result.length,result });
};
