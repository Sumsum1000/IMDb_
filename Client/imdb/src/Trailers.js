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
      <Carousel interval={null} nextLabel={null} prevLabel={null}>
          {movies.map(movie => {
             return(
                <Carousel.Item>
                    <img className="d-block w-100" src={`http://image.tmdb.org/t/p/w500${movie.backdrop_path}`}/> 
                        <Carousel.Caption>
                            <img className="d-block w-100" src={`http://image.tmdb.org/t/p/w200${movie.poster_path}`}/> 
                        </Carousel.Caption>
                        <Carousel.Caption className="play-icon">
                            <img className="d-block w-100" src={"/AnyConv.com__play-button-svgrepo-com-_1__1.svg"}/> 
                        </Carousel.Caption>
             </Carousel.Item>
             ) 
          })}
         
    </Carousel>
    
  )
  : "Loading..."
}