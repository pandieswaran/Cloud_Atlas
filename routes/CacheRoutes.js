const cacheController = require('../conrollers/cacheController');
const router = require('express').Router();


//Routes to Cahce using /cachee
router.get('/cache', cacheController.createCache); 
router.get('/getcache', cacheController.cacheView);


module.exports = router