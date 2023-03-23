import React from 'react';
import './CardFoto.css'

const CardFoto = ({myKey, imagen, descriptionImagen, ubicacion, camara}) => {
    return(
        <div key={myKey}>
            <img src={imagen} alt={descriptionImagen}/>
            {ubicacion==null ? <p>Ubicacion: SIN DATOS</p> : <p>Ubicacion: {ubicacion}</p>}
            {camara==null ? <p>Camara: SIN DATOS</p> : <p>Camara: {camara}</p>}
        </div>
    )
}


export { CardFoto }