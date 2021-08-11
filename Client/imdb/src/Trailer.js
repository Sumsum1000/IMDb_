import { MoviesContext } from './MoviesContext';
import {useContext, useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {
    useParams,
    Link,
  } from "react-router-dom";
import './trailer.css';

export default function Trailer(){
    const { id } = useParams();
    const {movies} = useContext(MoviesContext);
    const movieId = movies.filter(movie => movie.id == id);
    const movieWithoutId = movies.filter(movie => movie.id != id);

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    

    return(
        <div className="container">
            <div className="Carouselcontainer">
                <div className="backContainer">
                <Link to={"/"}>
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--chevron-left-inline ipc-button__icon ipc-button__icon--pre" viewBox="0 0 24 24" fill="white" role="presentation"><path d="M18.378 23.369c.398-.402.622-.947.622-1.516 0-.568-.224-1.113-.622-1.515l-8.249-8.34 8.25-8.34a2.16 2.16 0 0 0 .548-2.07A2.132 2.132 0 0 0 17.428.073a2.104 2.104 0 0 0-2.048.555l-9.758 9.866A2.153 2.153 0 0 0 5 12.009c0 .568.224 1.114.622 1.515l9.758 9.866c.808.817 2.17.817 2.998-.021z"></path></svg>
                    <div class="buttonBack">Back</div>
                </Link>
                 </div>

                <Carousel activeIndex={index} onSelect={handleSelect} interval={null} nextLabel={null} prevLabel={null}>
                    <Carousel.Item>
                            <iframe  width="850" height="450" src={`https://www.youtube.com/embed/${movieId[0].videos.results[0].key}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen frameborder="0"></iframe>
                    </Carousel.Item>  
                    {movieWithoutId.map(movie => {
                        return(
                            <Carousel.Item>   
                                <iframe  width="850" height="450" src={`https://www.youtube.com/embed/${movie.videos.results[0].key}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen frameborder="0"></iframe>
                            </Carousel.Item>
                        ) })}
                </Carousel>
            </div>
            <div className="VideoInfo">
                <img src={`http://image.tmdb.org/t/p/w200${movieId[0].poster_path}`}/>
            </div>
        </div>
       
    )   
}