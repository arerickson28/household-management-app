const router = require('express').Router();
const { Group, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
//router.get('/', async (req, res) => {    
    try {
        res.render('groups');
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
