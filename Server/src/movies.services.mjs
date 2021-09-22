import mongo from 'mongodb';
import { Movie } from './db/Movies.model.mjs';
import { paginate } from 'mongoose-paginate-v2';
import { query } from 'express';
const { ObjectId } = mongo;
import 'express-async-errors';
import { getUserID } from './users.services.mjs';



// export function getMovies() {
//     return Movie
//     .find();
// }

export function getMovies() {
    return Movie
    .find()
}

export function getFeatured() {
    return Movie
    .find({vote_average: {$gt: 7}});
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
    return Movie.findOne({id: id});
}



export async function addReview(movieID, review) {
    const movie = await getMovie(movieID);
    const user = await getUserID(review.userID);
  
    console.log(user)
    const editReview = {
        score: review.score,
        title: review.title,
        body: review.comments,
        author: review.userID
    }

   if (user){
    movie.reviews.push(editReview);
     movie.save();
      return editReview;

   }else{
       return "user doesn't exist!";
   }
}




