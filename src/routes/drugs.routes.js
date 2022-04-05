const express =  require('express');
const {searchDrugs} = require('../controllers/drugs.controllers');


router = express.Router();
router.post('/searchDrugs',searchDrugs);



module.exports = router;
