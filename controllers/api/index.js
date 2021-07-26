const router = require('express').Router();

const groupRoutes = require('./groupRoutes');
const userRoutes = require('./userRoutes');

router.use('/groups', groupRoutes);

router.use('/users', userRoutes);

module.exports = router;
