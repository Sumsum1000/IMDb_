import mongo from 'mongodb';
import { Movie } from './db/Movies.model.mjs';
import { paginate } from 'mongoose-paginate-v2';
import { query } from 'express';
const { ObjectId } = mongo;


export function getMovies() {
    return Movie
    .find()
}

export function getFeatured() {
    return Movie
    .find();
    //.aggregate([{$min: {vote_average: 8}}]);
}

// export function getMovies(filter={}) {

//     const query = {};
//     let page = 1;
//     let limit = 10;

//     if (filter.page) {
//         page = parseInt(filter.page);
//     }
//     if (filter.limit) {
//         limit = parseInt(filter.limit);
//     }

//     return Movie
//     .paginate(query, {page, limit});
// }

export function getMovie(id) {
    return Movie
    .findOne({_id: ObjectId(id)});
}

