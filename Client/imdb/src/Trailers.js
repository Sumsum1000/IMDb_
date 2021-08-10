import { MoviesContext } from './MoviesContext';
import {useContext} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './trailers.css';
import {
    Link,
  } from "react-router-dom";


export default function Trailers(){
    const {movies} = useContext(MoviesContext);


  return Array.isArray(movies) && movies.length > 0 ? (
      <Carousel interval={5000} nextLabel={null} prevLabel={null}>
          {movies.map(movie => {
             return(
                <Carousel.Item>
                    <Link to={`/trailers/${movie.id}`}>
                    <img className="d-block w-100" src={`http://image.tmdb.org/t/p/w500${movie.backdrop_path}`}/> 
                    </Link>
                        <Carousel.Caption className= "poster">
                            <img className="d-block w-100" src={`http://image.tmdb.org/t/p/w200${movie.poster_path}`}/> 
                            <div className="plus"></div>
                        </Carousel.Caption>
                        <Carousel.Caption className="play-icon">
                            <img className="d-block w-100" src={"/AnyConv.com__play-button-svgrepo-com-_1__1.svg"}/> 
                        </Carousel.Caption>
                        <Carousel.Caption className="title">
                            <p>{movie.title}</p>
                        </Carousel.Caption>
                        <Carousel.Caption className="trailer">
                            <p>Watch the Trailer</p>
                        </Carousel.Caption>
                </Carousel.Item>
             ) 
          })}
    </Carousel>
  )
  : "Loading..."
}