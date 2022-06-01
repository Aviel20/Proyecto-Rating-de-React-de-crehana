import React from 'react';
import Caja from './Caja';
import "../style/Body.css"
import Rating from './Rating';


export default function Body(props) {

    return(
        <>
        <div className='cBody'>
        <div>
            {props.car === false ? (
                    <br/>
                ) : (props.selec.fullTitle ) ? (
                    <Rating
                    fullTitle = {props.selec.fullTitle}
                    imDb = {props.selec.imDb}
                    metacritic = {props.selec.metacritic}
                    rottenTomatoes = {props.selec.rottenTomatoes}
                    theMovieDb = {props.selec.theMovieDb}
                    />
                ) : (
                <p className='car'>Seleccione una pelicula</p>
            )}
        </div>
        <div className='ContendorCajas'>
        {props.data.length >= 1 ? (
            props.data.map((el) => (
                <Caja 
                    key={el.id} 
                    name={el.name} 
                    img={el.img} 
                    ano={el.ano}
                    onClickS={() => {props.onClickS(el.id)}}
                    />
            ))
            ) : props.cargando === true ? (
                <p className='car'>Cargando...</p>
            ) : (
                <h3 className='h3'>Busca una pelicula</h3>
            )}
        </div>
        </div>
        </>
    )
}