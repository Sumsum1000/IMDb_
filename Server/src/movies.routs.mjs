import express from 'express';
import {getMovies} from './movies.services.mjs';
import {getMovie} from './movies.services.mjs';

export const MoviesRouter = express.Router();

MoviesRouter.get('/', (req, res) => {
    res.send(getMovies());
});

MoviesRouter.get('/:id', (req, res) => {
    res.send(getMovie(req.params.id));
});


