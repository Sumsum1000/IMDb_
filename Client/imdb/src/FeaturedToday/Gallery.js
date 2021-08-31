import './Gallery.css';
import { useContext } from "react";
import { MoviesContext } from "../MoviesContext";
import MovieCard from "./MovieCard";
import star from '../Images/YellowStar.png';

export default function Gallery() {

    const {movies} = useContext(MoviesContext);

    return(

        

        <div className='gallery'>
            {movies.map(movie => <MovieCard  starSrc={star}
            vote_average={movie.vote_average}
            original_title={movie.original_title}
            movieId={`/MovieToday/${movie.id}`}
            imgUrl={
                 `https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            />)}
        </div>
    )
}




