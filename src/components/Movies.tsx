import {useContext} from "react";
import { MoviesContext } from "../context/MoviesContext";
import { MovieCard } from "./MovieCard";
import '../styles/movie-card.css';

export const Movies = ()=> {

    const {movies_state} = useContext(MoviesContext);
    
    return (
      <div className="movies-container">
        {
            movies_state.nowPlaying.map(p => {
                console.log(p);
                return ( <MovieCard movie={p} />)
            //  return ( <p>{p.original_title}</p>)
                
            })
        }
         {/* {
            movies_state.popular.map(p => {
                return (
                    <p key={p.id}>{p.original_title}</p>
                )
            })
        }
         {
            movies_state.topRated.map(p => {
                return (
                    <p key={p.id}>{p.original_title}</p>
                )
            })
        }
         {
            movies_state.upComing.map(p => {
                return (
                    <p key={p.id}>{p.original_title}</p>
                )
            })
        } */}
      </div>
    )

}
