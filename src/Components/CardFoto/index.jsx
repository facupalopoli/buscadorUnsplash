import { Button } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import './CardFoto.css'
import axios from 'axios'



const CardFoto = ({myKey, imagen, descriptionImagen}) => {

    const [datosDetalles, setDatosDetalles] = useState([])
    const accessKey = '_AOQg1DMgNmM7pq5nY7XTVPCBqYY8me_Exw9l81sW1Y'
    const [handleClick, setHandleClick] = useState(false)
    let ubicacion = ''
    let camara = ''
        
    const obtenerDatos = async () => {
        const response = await axios.get(`https://api.unsplash.com/photos/${myKey}/?client_id=${accessKey}`)
        const datos = response.data
        setDatosDetalles(datos)
        console.log(datos)
        ubicacion = datosDetalles.location.name
        camara = datosDetalles.exif.model
        setHandleClick(!handleClick)
    }

    return(
        <div key={myKey}>
            <img src={imagen} alt={descriptionImagen}/>
            {handleClick?
                <Button isDisabled>Gracias</Button>
            :
                <Button onClick={obtenerDatos}>Mostrar Detalles</Button>
            }
            
            {handleClick && (ubicacion == null) ? <p>Ubicación: SIN DATOS</p> : <p>Ubicación: {ubicacion}</p>}
            {handleClick && (camara == null) ? <p>Cámara: SIN DATOS</p> : <p>Cámara: {camara}</p>}
        </div>
    )
}


export { CardFoto }

