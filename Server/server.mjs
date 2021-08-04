import express from 'express';
// import logger from 'morgan';

import {MoviesRouter} from './src/movies.routs.mjs';

export const app = express();

// app.use(logger('dev'));

app.use(express.json());

app.use('/Movies', MoviesRouter);

app.use(express.static('../simple-products-catalog-react/build/'));

app.listen(8080);

console.log("Server is listening on http://localhost:8080");