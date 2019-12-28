//@author Laurent <laurent@marseille-web.fr>

const express = require('express');
const router = express.Router();
const {client, Mapper} = require('../CassandraClient');
const Merchant = require('../Models/Merchant');
const Timeline = require('../Models/Timeline');

const merchant = new Merchant(client);

// @route  /api/merchants
router.get('/merchants', (req, res) => {
    const merchants = merchant.getAll();
    merchants.then(response => res.json(response))
            .catch(e => console.log(e));
});

const timeline = new Timeline();
// @route  /api/timeline
router.get('/timeline', (req, res) => {
    const timelines = timeline.getAll();
    res.json(timelines);
});



module.exports = router;