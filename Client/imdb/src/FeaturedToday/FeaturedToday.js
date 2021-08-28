import './FeaturedToday.css';
import Section from './Section';
import { useState, useEffect } from 'react';
import { MoviesContext } from '../MoviesContext';
import star from '../Images/YellowStar.png';
import listIcon from '../Images/list-icon.svg';
import { useContext } from 'react';
import {
    useParams,
    Link,
    useHistory,
  } from "react-router-dom";
  import Carousel from 'react-multi-carousel';
  import 'react-multi-carousel/lib/styles.css';   

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <button onClick={() => onClick()} />;
  };

export default function FeaturedToday() {

    const {movies} = useContext(MoviesContext);

    

    return(
        
        <div className='featured-container'>
        <Link to={'/gallery'}>
            <h2 className='section-header'>
                Featured today
            </h2>
        </Link>
            <Carousel 
                responsive={responsive}
                infinite={true}
                itemClass='item-class'
                containerClass='my-container'
                className='class-name'
                customRightArrow={<CustomRightArrow />}
            > 
            {movies.map(movie => 
            <div className='carousel-card'>
            <Link to={`/MovieToday/${movie.id}`}>   
                <Section movie_url={
                `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
                } />
                </Link>
                <div  className='fan-favorites-card-bottom'>
                <div className='carousel-card-rating'>
                    <img className='star-img' src={star} />
                    <p>{movie.vote_average}</p>
                </div>
                <h3 className='carousel-card-movie-title'>{movie.original_title}</h3>
                <div className='watch-list-container'>
                    <span className='watch-list'><span className='plus'>+</span>WatchList</span> 
                    <div className='trailer-container'>
                        <span className='trailer'>Trailer</span>
                    </div>
                </div>
               
                </div>
            </div>
                
                )} 
                
            </Carousel>;
        </div>
    )
}