import { useLocation } from "react-router-dom"
import { Result } from "../interfaces/interfaces";
import { Navbar } from "./Navbar"

import '../styles/single-movie.css'

export const SingleMovieCard = () => { 

   const moviesState = useLocation().state as Result;
   
    return(
        <>
        <Navbar />
        <div id="single-movie-container"
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${moviesState.backdrop_path})`
            }}
        >
            <div id="single-movie-content">      
          
            </div>
            
        </div>
        
        </>
    )
 }