
import Carousel from 'react-bootstrap/Carousel';


export default function Movie({
  id,
  ...movie
 
}) {



  return (
    <Carousel.Item>
       <img className="d-block w-100" src={`http://image.tmdb.org/t/p/w300${movie.backdrop_path}`}/> 
       <Carousel.Caption>
      <h3>{movie.title}</h3>
      </Carousel.Caption>
    </Carousel.Item>
    
      
  );
}


