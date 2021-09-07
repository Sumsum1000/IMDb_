import mongo from 'mongodb';
import { Movie } from './db/Movies.model.mjs';
import 'express-async-errors';
import { getUserID } from './users.services.mjs';



// export function getMovies() {
//     return Movie
//     .find();
// }

export function getMovies() {
    return Movie
    .find()
    .populate({
        path: 'reviews',
        populate: {
            path: 'author'
        }
    })
}

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




