const router = require('express').Router();

const groupRoutes = require('./groupRoutes');

router.use('/groups', groupRoutes);


module.exports = router;
