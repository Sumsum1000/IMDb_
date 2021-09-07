import './FeaturedToday.css';
import Section from './Section';
import { MoviesContext } from '../MoviesContext';
import star from '../Images/YellowStar.png';

import {ButtonOne, ButtonTwo} from './Buttons';
import { useContext } from 'react';
import {
    useParams,
    Link,
    useHistory,
  } from "react-router-dom";
  import Carousel from 'react-multi-carousel';
  import 'react-multi-carousel/lib/styles.css';   
import MovieCard from './MovieCard';

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
    return <button className='prev buttonL button' onClick={() => onClick()}>
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="white" role="presentation"><path d="M18.378 23.369c.398-.402.622-.947.622-1.516 0-.568-.224-1.113-.622-1.515l-8.249-8.34 8.25-8.34a2.16 2.16 0 0 0 .548-2.07A2.132 2.132 0 0 0 17.428.073a2.104 2.104 0 0 0-2.048.555l-9.758 9.866A2.153 2.153 0 0 0 5 12.009c0 .568.224 1.114.622 1.515l9.758 9.866c.808.817 2.17.817 2.998-.021z"></path>
      </svg>
    </button>;
  };

  const CustoLeftArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <button className='prev buttonR button' onClick={() => onClick()}>
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="white" role="presentation"><path d="M18.378 23.369c.398-.402.622-.947.622-1.516 0-.568-.224-1.113-.622-1.515l-8.249-8.34 8.25-8.34a2.16 2.16 0 0 0 .548-2.07A2.132 2.132 0 0 0 17.428.073a2.104 2.104 0 0 0-2.048.555l-9.758 9.866A2.153 2.153 0 0 0 5 12.009c0 .568.224 1.114.622 1.515l9.758 9.866c.808.817 2.17.817 2.998-.021z"></path>
      </svg>
    </button>;
  };


export default function FeaturedToday() {

    const {movies} = useContext(MoviesContext);
    //console.log('Featured: ', featured);

    return(
        
        <div className='featured-container'>
        
            <h2 className='section-header'>
            <Link to={'/gallery'}>Featured today</Link>
            </h2>
        
            <Carousel 
                responsive={responsive}
                infinite={true}
                itemClass='item-class'
                containerClass='my-container'
                className='class-name'
                customRightArrow={<CustomRightArrow />}
                customLeftArrow={<CustoLeftArrow />}
            > 
            {movies.map(movie => 
            <div className='carousel-card'>
                <MovieCard vote_average={movie.vote_average}
                           original_title={movie.original_title}
                           movieId={`/MovieToday/${movie.id}`}
                           imgUrl={
                 `https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                >
                </MovieCard>
            </div>
                
                )} 
                
            </Carousel>;
        </div>
    )
}




          {/* <Link to={`/MovieToday/${movie.id}`}>   
                <Section movie_url={
                 `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
                } />
                </Link> */}


    {/* <div  className='fan-favorites-card-bottom'>
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
               
                </div> */}