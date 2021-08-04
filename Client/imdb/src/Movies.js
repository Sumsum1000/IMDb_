
import { MoviesContext } from './MoviesContext';
import {useContext} from 'react';
import Movie from './Movie';


export default function Movies() {
    const {movies} = useContext(MoviesContext);
  console.log(movies);

    return (
       <div>
            {Array.isArray(movies) && movies.length > 0
                ? movies.map(movie => <Movie key={movie.id} {...movie} />)
                : "Loading..."}
      </div>
    );
}
