import React from 'react';
import '../style/Buscar.css'

export default function Buscar({valor, onChange, onClick}) {

    return(
    <React.Fragment>
        <div className='c'>
            <input 
                type="text" 
                value={valor} 
                onChange = { (e)=>{onChange(e.target.value)} }
                className="a"/>
            <button 
                onClick={(e) => {onClick(e.target.value)}} 
                className="b"
            >Buscar</button>
        </div>
    </React.Fragment>
    )
}

