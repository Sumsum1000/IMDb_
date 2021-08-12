import { MoviesContext } from './MoviesContext';
import {useContext, useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {
    useParams,
    Link,
    useHistory,
  } from "react-router-dom";
import './trailer.css';
import ReactPlayer from "react-player";



export default function Trailer(){
    const { id } = useParams();
    const {movies} = useContext(MoviesContext);
    const selectedIndex = movies.findIndex(movie => movie.id == id)
    const selectedMovie = movies[selectedIndex];
    // const movieWithoutId = movies.filter(movie => movie.id != id);
    const history = useHistory();

    const [index, setIndex] = useState(0);
    console.log(movies.length);

    const handleSelect = () => {
        if(selectedIndex == (movies.length-1)){
            history.push(`/${movies[0].id}`);
        }else {
            history.push(`/${movies[selectedIndex+1].id}`);
        }
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
                    {/* <ReactPlayer  width="850px" height="350px" playing={true} controls={true}
        url={`https://www.youtube.com/watch?v=${selectedMovie.videos.results[0].key}`}
      /> */}
                    {/* <video width="850"  controls="true" >
                    <source type="video/mp4" src={"/INTERSTELLAR - Own it TODAY on Blu-ray and DIGITAL HD!.mp4"}/>
                    </video> */}
                            <iframe  width="850" height="450" src={`https://www.youtube.com/embed/${selectedMovie.videos.results[0].key}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen frameborder="0"></iframe>
                    </Carousel.Item>  
                    {/* {movieWithoutId.map(movie => {
                        return(
                            <Carousel.Item>   
                                <iframe  width="850" height="450" src={`https://www.youtube.com/embed/${movie.videos.results[0].key}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen frameborder="0"></iframe>
                            </Carousel.Item>
                        ) })} */}
                </Carousel>
            </div>
            <div className="VideoInfo">
                <div className="posterContainer">
                     <img src={`http://image.tmdb.org/t/p/w200${selectedMovie.poster_path}`}/>
                </div>
                <div className="info">
                    <h5>{selectedMovie.original_title} {`(${selectedMovie.release_date.slice(0,4)})`}</h5>
                    {selectedMovie.genres.map(genre => <p> {genre.name},</p>)}
                </div>
            </div>
        </div>
       
    )   
}