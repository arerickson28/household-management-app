const router = require('express').Router();
const { Group, User } = require('../../models');

router.get('/', async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json(err);
    }
});