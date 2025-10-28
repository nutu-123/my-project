import { useState } from "react";



function MovieList() {
  const [movies, setMovies] = useState([
    { id: 1, title: "3 Idiots", genre: "motivation", rating: 8.8 },
    { id: 2, title: "The good dinosor", genre: "children", rating: 9.0 },
    { id: 3, title: "Avatar: The way of water", genre: "Sci-Fi", rating: 8.6 }
  ]);

  function removeMovie(id) {
    const newList = movies.filter(movie => movie.id !== id);
    setMovies(newList);
  }

  return (
    <div>
      {movies.map(movie => (
        <div key={movie.id} style={{ marginBottom: "10px", border: "1px solid black", padding: "10px" }}>
          <p>Title: {movie.title}</p>
          <p>Genre: {movie.genre}</p>
          <p>Rating: {movie.rating}</p>
          <button onClick={() => removeMovie(movie.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
