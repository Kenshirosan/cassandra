const express = require('express');
const router = express.Router();
const { userclient } = require('../CassandraClient');
const Merchant = require('../Models/Merchant');
const Timeline = require('../Models/Timeline');
const User = require('../Models/User');



// @route  /api/merchants
router.get('/merchants', (req, res) => {
    const merchant = new Merchant(userclient);
    merchant.getAll()
        .then(response => res.json(response._rs))
        .catch(e => console.log(e));
});


// @route  /api/timeline
router.get('/timeline', (req, res) => {
    const timeline = new Timeline(userclient);
    timeline.getAll()
        .then(response => res.json(response))
        .catch(e => console.log(e))
});


// @route  /api/${email}
router.get('/users/:email', (req, res) => {
    const user = new User(userclient);
    user.getUser(req.params.email)
        .then(response => res.json(response._rs))
        .catch(e => console.log(e));
});

module.exports = router;