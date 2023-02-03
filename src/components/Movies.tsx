import {useContext} from "react";
import { MoviesContext } from "../context/MoviesContext";
import { MovieCard } from "./MovieCard";
import '../styles/movie-card.css';

export const Movies = ()=> {

    const {movies_state} = useContext(MoviesContext);
    
    return (
    <>
        <p className="movie-type">Now Playing</p>
        <div className="movies-container">
            {
            movies_state.nowPlaying.map(p => {
                return ( <MovieCard movie={p} />)
            })
            }
        </div>
        <p className="movie-type">Popular</p>
        <div className="movies-container">
            {
            movies_state.popular.map(p => {
                return ( <MovieCard movie={p} />)
            })
            }
        </div>
        <p className="movie-type">Top Rated</p>
        <div className="movies-container">
            {
            movies_state.topRated.map(p => {
            return ( <MovieCard movie={p} />)
             })
            }
        </div>
        <p className="movie-type">Up Coming</p>
        <div className="movies-container">
            {
            movies_state.upComing.map(p => {
                return ( <MovieCard movie={p} />)
            })
            }
        </div>
    
      
      
        </>
    )

}
