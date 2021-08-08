import { MoviesContext } from './MoviesContext';
import {useContext} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {
    useParams,
  } from "react-router-dom";

export default function Trailer(){
    const { id } = useParams();
    const {movies} = useContext(MoviesContext);
    const movieId = movies.filter(movie => movie.id == id);

    return(
        <Carousel interval={null} nextLabel={null} prevLabel={null}>
           <Carousel.Item>
                 <iframe width="560" height="315" src={`https://www.youtube.com/embed/${movieId[0].videos.results[0].key}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen frameborder="0"></iframe>
           </Carousel.Item>  
           <Carousel.Item> 
           </Carousel.Item>       
        </Carousel>
    )   
}