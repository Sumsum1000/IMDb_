import { MoviesContext } from './MoviesContext';
import {useContext} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './trailers.css';



export default function Trailers(){
    const {movies} = useContext(MoviesContext);

   
  return (
      <Carousel interval={null} nextLabel={null} prevLabel={null} >
          {movies.map(movie => {
             return(
                <Carousel.Item>
                <img className="d-block w-100" src={`http://image.tmdb.org/t/p/w300${movie.backdrop_path}`}/> 
                <Carousel.Caption>
                     <h3>{movie.title}</h3>
                </Carousel.Caption>
             </Carousel.Item>
             ) 
          })}
         
    </Carousel>
    
  );
}
