import mongoose from 'mongoose';

const MoviesSchema = new mongoose.Schema({
    // adult: String,
    // backdrop_path: String,
   
});


export const Movie = mongoose.model('Movie', MoviesSchema);