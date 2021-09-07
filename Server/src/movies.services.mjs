import mongo from 'mongodb';
import { Movie } from './db/Movies.model.mjs';
//import { Featured } from './db/Movies.model.mjs';
import { paginate } from 'mongoose-paginate-v2';
const { ObjectId } = mongo;


export function getMovies() {
    return Movie
    .find()
}

// export function getFeatured() {
//     return Movie
//     .find()
//     //const result = Movie.aggregate([ {$match: {original_title: F9}}]);
//     //return Movie;
//     // return Movie
//     // .aggregate([
//     //     {$match: {original_title: F9}}
//     // ])
// }

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

