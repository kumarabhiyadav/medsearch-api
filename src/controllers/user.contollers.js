const user = require("../models/user");

exports.login = async(req, res) => {
    let { email, password } = req.body;
    const result = await user.findOne({ email: email, password: password });
    if (result) {

        res.status(200).json({ success: true, result, message: "Logged in as " + result.name });
    } else {
        res.status(200).json({ success: false, result, message: "User Not Exist" });

    }


};


exports.register = async(req, res) => {
    let { email, password, name } = req.body;

    const result = await drugs.findOne({ email: email });
    if (result) {

        res.status(200).json({ success: false, result, message: 'Email already exists' });
    } else {
        res.status(200).json({ success: true, result, message: 'Registration completed' });
    }

};