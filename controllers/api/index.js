const router = require('express').Router();

const groupRoutes = require('./groupRoutes.js');


router.use('/groups', groupRoutes);


module.exports = router;
