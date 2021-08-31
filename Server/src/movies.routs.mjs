import express from 'express';
import {getMovies} from './movies.services.mjs';
import {getMovie} from './movies.services.mjs';

export const MoviesRouter = express.Router();

MoviesRouter.get('/', async (req, res) => {
    res.send(await getMovies());
});

MoviesRouter.get('/:id', async (req, res) => {
    res.send(await getMovie(req.params.id));
});


