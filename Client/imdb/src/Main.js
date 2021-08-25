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
import MovieToday from './MovieToday/MovieToday';
import upNext from './Images/upNext.PNG';
import SignIn from './SignIn';


export default function Main(){

return(
 <>
    <Router>
      <MoviesProvider>
         <div className='grid-header'>
                  <NavHeader />
          </div>
      <Switch>

          <Route path="/signin" exact>
          <div className='grid-signIn'>
            <SignIn/>
          </div>
          </Route>

          <Route path="/MovieToday/:id">
            <div className='grid-MovieToday'>
                <MovieToday />
            </div>
          </Route>

          <Route path="/" exact>
            <div className='grid-trailers'>
                <Trailers />
                <img className= "upNext" src={upNext}/>
            </div>
                <FeaturedToday />
          </Route>

          <Route path="/:id">
            <Trailer />
          </Route>

          </Switch>
        </MoviesProvider>
      </Router>
</>

    );
}

