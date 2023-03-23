import React from 'react';
import './CardFoto.css'

const CardFoto = ({myKey, tags, imagen, descriptionImagen}) => {
    return(
        <div key={myKey}>
            <p></p>
            <img src={imagen} alt={descriptionImagen}/>  
        </div>
    )
}


export { CardFoto }