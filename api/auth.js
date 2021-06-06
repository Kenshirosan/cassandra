const express = require('express');
const router = express.Router();
const { userclient } = require('../CassandraClient');
const User = require('../Models/User');

/**
 * @route /api/auth/currentUser
 */
router.get('/currentUser', (req, res) => {
    const user = new User(userclient);
    req.params.email = 'l.neveux@icloud.com';
    user.getUser(req.params.email)
        .then(response => res.json(response._rs))
        .catch(e => alert(`Erreur: ${e.ResponseError.info}`));
});

module.exports = router;
