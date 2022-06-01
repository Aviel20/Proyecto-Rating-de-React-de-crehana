import React from 'react';
import '../style/Ranting.css'

export default function Ranting(props) {
    return(
        <React.Fragment>
            <div className='cRanting'>
                <h3>La pelicula  "{props.fullTitle}" posee un ranting:</h3>
                <p>MetaCritic: {props.metacritic}</p>
                <p>imDb: {props.imDb}</p>
                <p>rottenTomatoes: {props.rottenTomatoes}</p>
                <p>theMovieDb: {props.theMovieDb}</p>
            </div>
            <br/>
        </React.Fragment>
    )
}
