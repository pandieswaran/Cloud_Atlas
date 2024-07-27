const cacheController = require('../conrollers/cacheController');
const router = require('express').Router();

router.get('/cache', cacheController.createCache); 
router.get('/getcache', cacheController.cacheView);


module.exports = router