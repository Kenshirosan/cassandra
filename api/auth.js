const express = require('express');
const router = express.Router();
const { client } = require('../CassandraClient');
const User = require('../Models/User');


// @route /api/auth/currentUser
router.get('/currentUser', (req, res) => {
    const user = new User(client);
    req.params.email = 'l.neveux@icloud.com';
    user.getUser(req.params.email)
        .catch(e => alert(`Erreur: ${e.ResponseError.info}`))
        .then(response => res.json(response._rs));

});

module.exports = router;