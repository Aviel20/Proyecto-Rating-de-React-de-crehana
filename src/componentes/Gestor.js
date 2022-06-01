import React from 'react';
import Header from './Header';
import Buscar from './Buscar';
import { useState } from 'react'
import Body from './Body';
import "../style/Gestor.css"

export default function Gestor() {
    const [valor, setValor] = useState('');
    const [data, setData] = useState([]);
    const [cargando, setCargando] = useState(false);
    const [selec, setSelec] = useState([]);
    const [car, setCar] = useState(false)
    

    const handleOnChange = (valor) => {
        setValor(valor);
    }

    const handleOnClick = () => {
        if (!(valor >= 1)) {
            let url = `https://imdb-api.com/en/API/SearchMovie/k_aom206l2/${valor}`;
            setCargando(true)
            const getData = async (url) => {
                let res = await fetch(url),
                    json = await res.json(),
                    guardar = [];
                    console.log(json)
                json.results.forEach(async (el) => {
                    let peli = {
                        id: el.id,
                        name: el.title,
                        img: el.image,
                        ano: el.description
                    }
                    guardar.push(peli)
                });
                setData(guardar);
                setCargando(false);
            }
            getData(url);
            setCar(true);
        }
        setValor('');
        setData([]);
    }
    
    const handleOnClickS = (e) => {
        fetch(`https://imdb-api.com/en/API/Ratings/k_aom206l2/${e}`)
        .then(res => res.json())
        .then(json =>{
            setSelec({
                fullTitle: json.fullTitle,
                imDb: json.imDb,
                metacritic: json.metacritic,
                rottenTomatoes: json.rottenTomatoes,
                theMovieDb: json.theMovieDb
            })
        });
    }

    return (
        <React.Fragment>
            <div className='cGestor'>
                <Header>
                    <Buscar
                        valor={valor}
                        onChange={handleOnChange}
                        onClick={handleOnClick}
                    />
                </Header>
                <hr/>
                <div className='cajas'>
                    <Body
                        data={data}
                        cargando={cargando}
                        onClickS={handleOnClickS}
                        selec={selec}
                        car={car}
                />
                </div>
                <hr />
            </div>
        </React.Fragment>
    )
}