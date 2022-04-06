const express = require('express');
const { login, register } = require('../controllers/user.contollers');


router = express.Router();
router.post('/login', login);
router.post('/register', register);





module.exports = router;