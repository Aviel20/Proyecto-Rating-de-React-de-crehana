import React from 'react'
import '../style/Header.css'


export default function Header(props) {
    return(
        <React.Fragment>
            <div className='c'>
                <h2>Rating</h2>
                {props.children}
            </div>
        </React.Fragment>
    )
}