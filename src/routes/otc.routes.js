const express =  require('express');
const {searchOTC,fetchOTC} = require('../controllers/otc.controllers');


router = express.Router();
router.post('/searchOtc',searchOTC);
router.post('/fetchOTC',fetchOTC);





module.exports = router;
