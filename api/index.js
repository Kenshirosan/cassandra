const express = require('express');
const router = express.Router();
const { userclient } = require('../CassandraClient');
const Movies = require('../Models/Movies');
const Ratings = require('../Models/Ratings');
const Tags = require('../Models/Tags');

/**
 * @route  /api/movies
 */
router.get('/movies', (req, res) => {
    const movies = new Movies(userclient);
    const limit = 50;

    movies
        .getRowsWithLimit(userclient, limit)
        .then(data => res.json(data))
        .catch(err => console.error(err));
});

/**
 * @route  /api/ratings
 */
router.get('/ratings', (req, res) => {
    const ratings = new Ratings(userclient);
    ratings
        .getAll()
        .then(response => res.json(response))
        .catch(e => console.log(e));
});

/**
 * @route  /api/tags
 */

router.get('/users/tags', (req, res) => {
    const tags = new Tags(userclient);
    tags.getAll()
        .then(response => res.json(response._rs))
        .catch(e => console.log(e));
});

module.exports = router;
