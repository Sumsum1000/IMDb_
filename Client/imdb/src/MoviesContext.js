import React, { useEffect, useState } from 'react';

export const MoviesContext = React.createContext({
  movies: []
});

export default function MoviesProvider({ children }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8080/api/Movies')
      .then(response => response.json())
      .then(data => setMovies(data));
  }, []);

  return (
    <MoviesContext.Provider value={{
      movies,
      setMovies,
    }}>
      {children}
    </MoviesContext.Provider>
  );
}
