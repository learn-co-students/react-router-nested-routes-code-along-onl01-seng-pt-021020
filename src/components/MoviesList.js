import React from 'react';
import { Link } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const renderMovies = Object.keys(movies).map(movieID =>
    <Link key={movieID} to={`/movies/${movieID}`}>{movies[movieID].title}</Link>
  );

  return (
    <div>
      {renderMovies}
    </div>
  );
};

export default MoviesList;


//The movies prop has been passed from App to MoviesPage,
//then again to MoviesList.
//To make the code a little simpler, we've used object destructuring
//to get to movies directly, rather than have to write props.movies in
//multiple places.
