import loadJson from 'load-json-file';

let movies = loadJson.sync('./data/movies.json');

export function getMovies() {
    return movies;
}

export function getMovie(id) {
    const [ movie ] = movies.filter(movie => movie.id == id);
    return movie;
}

