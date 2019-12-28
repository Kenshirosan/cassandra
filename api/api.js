//@author Laurent <laurent@marseille-web.fr>

const express = require('express');
const router = express.Router();
const {client} = require('../CassandraClient');
const Merchant = require('../Models/Merchant');
const Timeline = require('../Models/Timeline');



// @route  /api/merchants
router.get('/merchants', (req, res) => {
    const merchant = new Merchant(client);
    const merchants = merchant.getAll()
            .then(response => res.json(response))
            .catch(e => console.log(e));
});


// @route  /api/timeline
router.get('/timeline', (req, res) => {
    const timeline = new Timeline(client);
    const timelines = timeline.getAll()
            .then(response => res.json(response))
            .catch(e => console.log(e))
});



module.exports = router;