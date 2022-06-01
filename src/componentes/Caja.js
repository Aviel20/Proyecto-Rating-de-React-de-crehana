import React from 'react';
import "../style/Caja.css"

export default function Caja(props) {
    
    return(
        <React.Fragment>
            <div onClick={props.onClickS} className="cCaja">
                <img src={props.img} alt={props.name} style={{width: 300}}/>
                <h3>{props.name}</h3>
                <h2>{props.ano}</h2>
            </div>
        </React.Fragment>
    )
}