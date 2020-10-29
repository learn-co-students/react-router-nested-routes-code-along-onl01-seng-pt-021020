import React from 'react'
import { Link } from 'react-router-dom'

const MoviesList = ({movies}) => {

    const renderMovies = () => {
        return (
            Object.keys(movies).map(id => {
                return (
                    <div key={id}>
                        <Link key={id} to={`/movies/${id}`}>{movies[id].id}. {movies[id].title}</Link>
                    </div>
                )
            })
        )
    }

    return (
        <div>
            {renderMovies()}
        </div>
    );
};

export default MoviesList