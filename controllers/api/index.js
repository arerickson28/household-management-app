const router = require('express').Router();

//const groupRoutes = require('./groupRoutes');
const userRoutes = require('./userRoutes');
const noteRoutes = require('./noteRoutes');
const groceryRoutes = require('./groceryRoutes');


//router.use('/groups', groupRoutes);
router.use('/user', userRoutes);
router.use('/note', noteRoutes);
router.use('/grocery', groceryRoutes);


module.exports = router;
