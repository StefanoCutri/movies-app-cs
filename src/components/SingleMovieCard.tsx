import { useLocation } from "react-router-dom"
import { Result } from "../interfaces/interfaces";
import { Navbar } from "./Navbar"

import '../styles/single-movie.css'
import { useMovieCast } from "../hooks/useMovieCast";
import { filterGenresById } from "../helpers/filterGenresById";

export const SingleMovieCard = () => { 

   const moviesState = useLocation().state as Result;
   const {cast} = useMovieCast(moviesState.id);

   const newArray = cast.slice(0, 5);

   const movieGenres = filterGenresById(moviesState.genre_ids)
   const n = [] as string[];
   movieGenres.forEach(g => n.push(g.name));
   console.log(n);

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
                    <span id="original-title"> {moviesState.original_title}</span>
                    <span className="release-date">({moviesState.release_date.slice(0, 4)})</span>
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
               
               
               <div className="cast">
                <span className="cast-preview">Genres: </span>
                {

                    n.map((genre, i, row )=>{
                            if (i + 1 !== row.length) {                     
                            return (
                            <span key={genre} className='cast-name'>
                                {genre}
                            </span>
                            )
                        }else{
                            return (
                                <span key={genre} className='cast-name'>
                                {genre}.
                            </span>
                            )
                        }
                    })
                    // n.map((act, i, row) => {
                    //     if (i + 1 !== row.length) {                     
                    //         return (
                    //         <span key={act.name} className='cast-name'>
                    //             {act.name}, 
                    //         </span>
                    //         )
                    //     }else{
                    //         return (
                    //             <span key={act.id} className='cast-name'>
                    //             {act.name}.
                    //         </span>
                    //         )
                    //     }
                    // })
                }
               </div>
               </div>
            </div>
            
        </div>
    )
 }