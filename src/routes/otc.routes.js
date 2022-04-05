const express =  require('express');
const {searchOTC} = require('../controllers/otc.controllers');


router = express.Router();
router.post('/searchOtc',searchOTC);



module.exports = router;
