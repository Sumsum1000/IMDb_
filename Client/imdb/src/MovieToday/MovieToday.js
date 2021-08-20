import './MovieToday.css';
import { MoviesContext } from '../MoviesContext';
import { useContext, useEffect, useState} from 'react';
import star from '../Images/YellowStar.png';
import share from '../Images/Share.png';
import apps from '../Images/Apps.png';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

export default function MovieToday() {
    

    const {movies} = useContext(MoviesContext);
    const {id} = useParams();
    const currentMovie = movies.find(movie => movie.id == id);
    console.log(currentMovie);
    // console.log('movies_ ', movies);
    // console.log('id_', id);
    

    // const [movieFromUrl, setmovieFromUrl] = useState({});
    // const [currentMovie, setCurrentMovie] = useState({});

    // useEffect(() => {
    //     const movieFromUrl = fetch(data => data.json())
    //     .then(data => setmovieFromUrl(data));
    // }, [])

    // useEffect(() => {
    //     setCurrentMovie(movieFromUrl);
    //     console.log('Current: ', currentMovie);
    // }, [movieFromUrl])






    

    return(
            // <h1>123 - {}</h1>
        
        // //<Link to='/MovieToday/:id'>
        <div className='movie-today'>
        {/* Name and rating - top ----------------------------- */}
        <div className='rating-root'>
            <div className='xxx'>
                <div>
                    <h3 className='movie-name'>{currentMovie.original_title}</h3>
                    <span>{currentMovie.release_date}</span>
                </div>
                <div className='line'>
                    <div className='rating'>
                        <h3 className='element-title'>IMDb RATING</h3>
                        <div className='rating-element-bottom'>
                            <img className='star-img' src={star} />
                            <div className='rating-numbers-container'>
                                <span ><span className='current-rating'>{currentMovie.vote_average}</span>/10</span>
                                <span className='k'>{
                                    currentMovie.popularity // Need to round number K/M -------------
                                }K</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className='rating'>
                        <h3 className='element-title'>YOUR RATING</h3>
                        <div className='rating-element-bottom'>
                            <img className='star-img' src={star} />
                            <p className='p'>Rate</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Cast -User reviews ---------------------------------------------- */}
        <div className='cast-user-review-root'>
            <span>Cast & crew - Trivia - IMDbPro</span>
            <img src={apps} className='cast-user-icon' />
            <span>All topics</span>
            <div className='devider'></div>
            <img src={share} className='cast-user-icon' />
        </div>
        {/* Media ----------------------------------------------------------- */}
  
        </div>
        //</Link>
        

        
    )
}


// import './MovieToday.css';
// import star from '../Images/Star.png';
// import {
//     useParams,
//     Link,
//     useHistory,
//   } from "react-router-dom";

// export default function MovieToday({movie_url}) {
//     return(
//             <div>

//                 <div className='movie-today-header'>
//                     <div>
//                         <h3>Fight Club</h3>
//                         <span>1999 2h 19min</span>
//                     </div>
//                     <div className='movie-today-rating'>
//                         <span>IMDB RATING</span>
//                         <span>8.8/10</span>
//                         <span>1.9M</span>
//                         <img className='start-icon' src={star} />
//                    </div>  
//                </div>
                       
//             </div>
//     )
// }