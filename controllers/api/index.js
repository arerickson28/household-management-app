const router = require('express').Router();

const apiRoutes = require('./api');
const groupRoutes = require('./groupRoutes.js');

router.use('/api', apiRoutes);
router.use('/groups', groupRoutes);


module.exports = router;
