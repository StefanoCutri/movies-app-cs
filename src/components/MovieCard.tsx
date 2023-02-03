import { Link } from 'react-router-dom';
import { Result } from '../interfaces/interfaces'
import '../styles/movie-card.css';
import { SingleMovieCard } from './SingleMovieCard';


interface movieType {
    nowPlaying: "Now Playing",
    popular: "Popular",
    topRated: "Top Rated",
    upComing: "Up Coming"
}
export const MovieCard = ({movie}:any, movieType: movieType) => {

    const newMovie = movie as Result;

  return (
    <>
    <div className='movie-content'>
        <img src={`https://image.tmdb.org/t/p/w300/${newMovie.poster_path}`} alt='Movie poster path'/>
    </div>
    </>
  )
}
