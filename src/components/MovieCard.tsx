import { Result } from '../interfaces/interfaces'
import '../styles/movie-card.css';

export const MovieCard = ({movie}:any) => {

    const newMovie = movie as Result;
console.log(newMovie);

  return (
    <div className='movie-content'>
        <img src={`https://image.tmdb.org/t/p/w300/${newMovie.poster_path}`} alt='Movie poster path'/>
        {/* <div className='movie-content'>

        </div> */}



    </div>
  )
}
