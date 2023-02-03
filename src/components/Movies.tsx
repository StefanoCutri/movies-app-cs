import {useContext} from "react";
import { resourceUsage } from 'process'
import React, { useRef } from 'react'
import { MovieDetails } from '../interfaces/interfaces';
import { MoviesContext } from "../context/MoviesContext";

export const Movies = ()=> {

    const {movies_state} = useContext(MoviesContext);

    return (
      <div>
        {
            // movies_state.popular !== undefined
            // ? movies_state.popular.map(p => {
            //     return (
            //         <p key={p.id}>{p.original_title}</p>
            //     )
            // })
            // : null
            movies_state.popular.map(p => {
                return (
                    <p key={p.id}>{p.original_title}</p>
                )
            })
        }
      </div>
    )

}
