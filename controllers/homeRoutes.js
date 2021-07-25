const router = require('express').Router();
const { User, Group } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    console.log(req.session.user_id);
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            //include: [{ model: Group }],
        });

        const user = userData.get({ plain: true });

        res.render('homepage', {
            ...user,
            logged_in: true
        });

    } catch (err) {
        res.status(500).json(err);
    }
});


router.get('/login', async (req, res) => {
    try {
        res.render('login');
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;