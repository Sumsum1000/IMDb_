import './MovieToday.css';
import star from '../Images/YellowStar.png';
import share from '../Images/Share.png';
import apps from '../Images/Apps.png';

export default function Rating() {
    return(
        <div>
        {/* Name and rating - top ----------------------------- */}
        <div className='rating-root'>
            <div className='xxx'>
                <div>
                    <h3 className='movie-name'>Luca</h3>
                    <span>2021 - PG - 1h 35min</span>
                </div>
                <div className='line'>
                    <div className='rating'>
                        <h3 className='element-title'>IMDb RATING</h3>
                        <div className='rating-element-bottom'>
                            <img className='star-img' src={star} />
                            <div className='rating-numbers-container'>
                                <span ><span className='current-rating'>7.5</span>/10</span>
                                <span className='k'>90K</span>
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
        </div>

        
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