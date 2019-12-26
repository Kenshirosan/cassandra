/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
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