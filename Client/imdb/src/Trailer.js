import { MoviesContext } from './MoviesContext';
import {useContext} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {
    useParams,
    Link,
    useHistory,
  } from "react-router-dom";
import './trailer.css';


export default function Trailer(){
    const { id } = useParams();
    const {movies} = useContext(MoviesContext);
    const selectedIndex = movies.findIndex(movie => movie.id == id)
    const selectedMovie = movies[selectedIndex];
    const history = useHistory();
   
 
    const PrevSelect = () =>{
        if (selectedIndex == 0){ //first movie
        history.push(`/${movies[(movies.length-1)].id}`);
        }else{
            history.push(`/${movies[selectedIndex-1].id}`);
        }
        
    }

    const nextSelect = () =>{
        if(selectedIndex == (movies.length-1)){  //last movie
             history.push(`/${movies[0].id}`);
        }else{
            history.push(`/${movies[selectedIndex+1].id}`);
        }
    }
    

    return(
        <div className="container">
            <div className="Carouselcontainer">
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"></path></svg> */}
                <div className="backContainer">
                <Link to={"/"}>
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#919191" role="presentation"><path d="M18.378 23.369c.398-.402.622-.947.622-1.516 0-.568-.224-1.113-.622-1.515l-8.249-8.34 8.25-8.34a2.16 2.16 0 0 0 .548-2.07A2.132 2.132 0 0 0 17.428.073a2.104 2.104 0 0 0-2.048.555l-9.758 9.866A2.153 2.153 0 0 0 5 12.009c0 .568.224 1.114.622 1.515l9.758 9.866c.808.817 2.17.817 2.998-.021z"></path></svg>
                    <div class="buttonBack">Back</div>
                </Link>
                 </div>
                <Carousel interval={null}  controls={false}>
                    <Carousel.Item>
                            <button className="prev" onClick={PrevSelect}><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="white" role="presentation"><path d="M18.378 23.369c.398-.402.622-.947.622-1.516 0-.568-.224-1.113-.622-1.515l-8.249-8.34 8.25-8.34a2.16 2.16 0 0 0 .548-2.07A2.132 2.132 0 0 0 17.428.073a2.104 2.104 0 0 0-2.048.555l-9.758 9.866A2.153 2.153 0 0 0 5 12.009c0 .568.224 1.114.622 1.515l9.758 9.866c.808.817 2.17.817 2.998-.021z"></path></svg></button>
                            <iframe width="850" height="450" src={`https://www.youtube.com/embed/${selectedMovie.videos.results[0].key}?autoplay=1`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen frameborder="0"></iframe>
                            <button className="next" onClick={nextSelect}><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" role="presentation"><path d="M5.622.631A2.153 2.153 0 0 0 5 2.147c0 .568.224 1.113.622 1.515l8.249 8.34-8.25 8.34a2.16 2.16 0 0 0-.548 2.07c.196.74.768 1.317 1.499 1.515a2.104 2.104 0 0 0 2.048-.555l9.758-9.866a2.153 2.153 0 0 0 0-3.03L8.62.61C7.812-.207 6.45-.207 5.622.63z"></path></svg></button>
                    </Carousel.Item>  
                </Carousel>
            </div>
            <div className="containerInfo">
                <div className="VideoInfo">
                    <div className="posterContainer">
                        <img src={`http://image.tmdb.org/t/p/w200${selectedMovie.poster_path}`}/>
                        <div className="plus"></div>
                    </div>
                    <div className="info">
                        <h5>{selectedMovie.original_title} {`(${selectedMovie.release_date.slice(0,4)})`}</h5>
                        {selectedMovie.genres.map(genre => <p> {genre.name},</p>)}
                    </div>
                </div>
                <hr className="devider"/>
                <div className="trailer-info">
                    <h2>Official Trailer</h2>
                    <h3>{selectedMovie.overview}</h3>
                </div>
            </div>
        </div>
       
    )   
}