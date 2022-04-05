const express =  require('express');
const {searchDrugs,fetchDrugs} = require('../controllers/drugs.controllers');


router = express.Router();
router.post('/searchDrugs',searchDrugs);

router.post('/fetchDrugs',fetchDrugs);



module.exports = router;
