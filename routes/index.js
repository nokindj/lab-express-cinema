const express = require('express');
const Movie = require('../models/Movie');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get("/movies", (req, res) => {
    Movie.find()
    .then((allTheMoviesFromDB) => {
        res.render("movies", {movies: allTheMoviesFromDB});
    });
})

router.get("/movies/:movieId", (req, res) => {
    let movieId = req.params.movieId;
    Movie.findById(movieId)
    .then((theMovieFound) => {
        res.render("movie-details", {movie: theMovieFound});
    })
    .catch((err) => {
        res.render("error", {err});
      })
})




module.exports = router;

