import mongoose from 'mongoose';
import paginate  from 'mongoose-paginate';

const MoviesSchema = new mongoose.Schema({
    // adult: String,
    // backdrop_path: String,
   
});

MoviesSchema.plugin(paginate);

export const Movie = mongoose.model('Movie', MoviesSchema);
//export const Featured = mongoose.model('Featured', MoviesSchema);