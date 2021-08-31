import mongo from 'mongodb';
import { Movie } from './db/Movies.model.mjs';
const { ObjectId } = mongo;


export function getMovies() {
    return Movie
    .find();
}

export function getMovie(id) {
    return Movie
    .findOne({_id: ObjectId(id)});
}

