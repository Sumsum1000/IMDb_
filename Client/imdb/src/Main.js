import {
    BrowserRouter as Router,
    Route,
    Switch,
  } from "react-router-dom";
import Trailers from "./Trailers";
import Trailer from "./Trailer";
import NavHeader from './NavHeader';
import MoviesProvider from './MoviesContext';
import FeaturedToday from "./FeaturedToday/FeaturedToday";
<<<<<<< HEAD
import MovieToday from "./FeaturedToday/MovieToday/MovieToday";
=======
import upNext from './Images/upNext.PNG';
>>>>>>> 841feb1ac61181d1cbddffa01fb27ada40cee682

export default function Main(){

return(
 <>
    <Router>
      <MoviesProvider>
      <Switch>

          <Route path="/" exact>
            <div className='grid-header'>
                <NavHeader />
            </div>
            <div className='grid-trailers'>
                <Trailers />
                <img className= "upNext" src={upNext}/>
            </div>
                <FeaturedToday />
          </Route>

          <Route path="/:id">
            <div className='grid-header'>
                <NavHeader />
            </div>
            <Trailer />
          </Route>
<<<<<<< HEAD
          {/* id 2  --------------------------------------*/}
          <Route path="/:id2">
              <MovieToday />
          </Route>
=======
          
>>>>>>> 841feb1ac61181d1cbddffa01fb27ada40cee682
          </Switch>
        </MoviesProvider>
      </Router>
</>

    );
}

