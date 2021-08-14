import './FeaturedToday.css';
import Section from './Section';
import { useState, useEffect } from 'react';
import { MoviesContext } from '../MoviesContext';
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
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
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

export default function FeaturedToday() {

    const {movies} = useContext(MoviesContext);
    console.log('Featured Movies: ', movies);
    // const [moviesList, setMoviesList] = useState([]);

    // useEffect(() => {
    //     setMoviesList(movies);
    // }, [])

    // useEffect(() => {
    //     setMoviesList(moviesList);
    // }, [moviesList])

    console.log('Featured Movies: ', movies);
    return(
        
        <div className='featured-container'>
            <h2 className='section-header'>
                Featured today
            </h2>
            <Carousel 
                responsive={responsive}
                infinite={true}
                itemClass='item-class'
                containerClass='my-container'
                className='class-name'
            > 
            {/* to={`/${movie.id}`} */}
            {movies.map(movie => <Link to={'/description'}>   
                <Section movie_url={
                `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
                } />
                </Link>
                )} 
            </Carousel>;
        </div>
    )
}