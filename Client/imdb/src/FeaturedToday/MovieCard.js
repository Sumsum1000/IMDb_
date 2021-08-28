import './FeaturedToday.css';
import star from '../Images/YellowStar.png';
import Section from './Section';
import { useContext } from 'react';
import { MoviesContext } from '../MoviesContext';
import {
    Link,
  } from "react-router-dom";
import { Children } from 'react';


export default function MovieCard({movieId, imgUrl, starSrc, vote_average, original_title}){

    const {movies} = useContext(MoviesContext);

    return(
        <div>
            <Link to={movieId}>
                <Section movie_url={imgUrl} />   
            </Link>
                
        <div  className='fan-favorites-card-bottom'>
            <div className='carousel-card-rating'>
                <img className='star-img' src={star} />
                <p>{vote_average}</p>
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