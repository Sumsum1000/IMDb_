import { MoviesContext } from './MoviesContext';
import { UserContext } from './User.context';
import {useContext, useCallback, useState, useEffect} from 'react';
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import './reviews.css';
import Review from './Review';
import {
    useParams,
    useHistory,
  } from "react-router-dom";


export default function Reviews({selectedMovie}){
    const { id } = useParams();
    const {movies} = useContext(MoviesContext);
    const {isLoggedIn, user} = useContext(UserContext);
    const [result, setResult] = useState("");
    const { handleSubmit, register, formState: { errors } } = useForm();
    const MovieReview = selectedMovie.reviews;
    const history = useHistory();


    const addReview = useCallback((score, title, comments) => {
        const userID = user.payload.id;
        console.log("user.payload.id" + user.payload.id)

        fetch(`http://localhost:8080/api/Movies/${id}/reviews`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            score, title, comments, userID
          })
        })
          .then(response => response.json())
          .then(data => {
              setResult(data);
            });
      }, []);
      
    const onSubmit = async (values, e) => {
        console.log("e target" + e.target)
        e.target.reset();
        console.log("inside submit" + result)
        try {
          
            addReview(values.score, values.title, values.comments);
        } catch(e) {
            console.log(e);
        }
    }

    useEffect(() => {
        setResult("");
    }, [history.location.pathname]);


    return(
        <div className="reviews-container">
        {isLoggedIn ? 
            <section className="reviews-section">
                <h2>User Reviews</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h3>Add your review</h3>

                    <label>Score</label>
                    <select
                        className="score"
                        {...register("score", {
                        required: "Required"
                    })}>
                        <option disabled>Select one...</option>
                        <option value="1" selected>1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>

                    <label className="titleLabel">Title</label>
                    <input
                        className="title"
                        type="text"
                        autoComplete= "off"
                        {...register("title", {
                        required: "Required",
                        maxLength: 30
                        })}
                    />
                    <ErrorMessage
                        errors={errors}
                        name="title"
                        message = "The title cannot be longer than 30 characters"
                        render={({ message }) => <p>{message}</p>}
                    />

                    <label>Comments</label>
                    <input
                        className="comments"
                        type="text"
                        autoComplete= "off"
                        {...register("comments", {
                        required: "Required",
                        })}
                    />
        
                    <button type="submit" >Submit</button>
                </form>
            {
                result ? 
                <div className="reviewAdded">
                  Thank you for your review!
                </div>
                :
                ""
            }


            </section>
             :
             ""
        }
        <section className="reviews-list">
             { Array.isArray(movies) && MovieReview.length > 0 
             ? MovieReview.map(MovieReview => <Review key={MovieReview.id} {...MovieReview} />) 
             :
             "No reviews yet..."
             }
         </section>
    </div>
   
    )
}