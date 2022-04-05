const otc = require("../models/otc");

exports.searchOTC = async function (req, res)  {
    try {
        
        const result = await otc.find({ Name: {$regex:req.body.query} });
        res.status(200).json({ success: true, count:result.length,result});
    } catch (error) {
        console.log(error);
        res.status(200).json({ success: false, error });
        
    }
};
