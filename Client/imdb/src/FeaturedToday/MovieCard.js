import './FeaturedToday.css';
import star from '../Images/YellowStar.png';
import Section from './Section';
import { useContext } from 'react';
import { MoviesContext } from '../MoviesContext';
import {
    Link,
  } from "react-router-dom";
import WishList from '../WishList/WishList';


export default function MovieCard({movieId, imgUrl, vote_average, original_title}){

    const addMovieToWishList = (movieId, userId) => {
        const isWishList = true // from userContext
        fetch('/api/users/id', {
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(isWishList)
          })
    }

    

    let heartColor = '#ffffff'

    return(
        <div>
               
            <Link to={movieId}>
                <Section movie_url={imgUrl} />   
            </Link>
                 
        <div  className='fan-favorites-card-bottom'>
            <div className='carousel-card-rating'>
                <img className='star-img' src={star} />
                <p>{vote_average}</p>
                <WishList onClick={addMovieToWishList} 
                          wishColor={heartColor}/>
            </div>
            <h3 className='carousel-card-movie-title'>{original_title}</h3>
            <div className='watch-list-container'>
                <span className='watch-list'><span className='plus'>+</span>WatchList</span> 
                <div className='trailer-container'>
                    <span className='trailer'>Trailer</span>
                </div>
            </div>
           
        </div>
        </div>
        
    )
}