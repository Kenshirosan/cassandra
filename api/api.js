//@author Laurent <laurent@marseille-web.fr>

const express = require('express');
const router = express.Router();
const Merchant = require('../Models/Merchant');

const merchant = new Merchant;

// @route  /api
router.get('/', (req, res) => {
    res.json({merchant});
});



module.exports = router;