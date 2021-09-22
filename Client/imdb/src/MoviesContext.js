import React, { useEffect, useState } from 'react';

export const MoviesContext = React.createContext({
  movies: []
});

export default function MoviesProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [featured, setFeatured] = useState([]);
  
  useEffect(() => {
    fetch('/api/Movies')
      .then(response => response.json())
      .then(data => setMovies(data));


      fetch('/api/Movies/featured')
      .then(response => response.json())
      .then(data => setFeatured(data));

  }, []);

  return (
    <MoviesContext.Provider value={{
      movies,
      setMovies,
      featured
    }}>
      {children}
    </MoviesContext.Provider>
  );
}
