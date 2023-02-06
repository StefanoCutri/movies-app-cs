import { useLocation } from "react-router-dom"
import { Result } from "../interfaces/interfaces";
import { Navbar } from "./Navbar"

import '../styles/single-movie.css'
import { useMovieCast } from "../hooks/useMovieCast";

export const SingleMovieCard = () => { 

   const moviesState = useLocation().state as Result;
   const {cast} = useMovieCast(moviesState.id);

   const newArray = cast.splice(-20);

    return(
        <div style={{
            width: '100%'
        }}>
        <Navbar />

        <div id="single-movie-container"
            style={{
                backgroundImage: `linear-gradient(
                    to top,
                    hsl(0 0% 0% / 0),
                    hsl(20 0% 0% / 0.3) 40%,
                    hsl(0 0% 0% / 1)
                ),url(https://image.tmdb.org/t/p/original/${moviesState.backdrop_path})`
            }}
        >
            <div className="single-movie-content">
                <div className="movie-title">
                    <span id="original-title"> {moviesState.original_title} - </span>
                    <span>{moviesState.release_date.slice(0, 4)}</span>
                </div>
               
                <div className="movie-info">
                    <p>{moviesState.overview}</p>
                </div>
            </div>

            
               <div className="cast">
                <span className="cast-preview">Cast: </span>
                {
                    newArray.map((act, i, row) => {
                        if (i + 1 !== row.length) {                     
                            return (
                            <span key={act.id} className='cast-name'>
                                {act.name},
                            </span>
                            )
                        }else{
                            return (
                                <span key={act.id} className='cast-name'>
                                {act.name}.
                            </span>
                            )
                        }
                    })
                }
               
               
               </div>
            </div>
            
        </div>
    )
 }