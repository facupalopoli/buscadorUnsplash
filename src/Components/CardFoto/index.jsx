import { Button, Flex, Link } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import './CardFoto.css'
import axios from 'axios'

const CardFoto = ({myKey, imagen, descriptionImagen, userName, linkUser}) => {

    const [datosDetalles, setDatosDetalles] = useState([])
    const accessKey = '_AOQg1DMgNmM7pq5nY7XTVPCBqYY8me_Exw9l81sW1Y'
    const [handleClick, setHandleClick] = useState(false)
    const utm = '?utm_source=buscadorImagenesFacundoPalopoli&utm_medium=cpc'
                
    const obtenerDatos = async () => {
        const response = await axios.get(`https://api.unsplash.com/photos/${myKey}/?client_id=${accessKey}`)
        const datos = response.data
        setDatosDetalles(datos)
        console.log(datos)
        setHandleClick(!handleClick)
    }

    return(
        <div key={myKey}>
            <img src={imagen} alt={descriptionImagen}/>
            <p>Foto de: <Link fontWeight='bold' href={`${linkUser}${utm}`}>{userName}</Link> en <Link fontWeight='bold' href={`https://unsplash.com/${utm}`}>Unsplash</Link></p>
            {!handleClick && <Button onClick={obtenerDatos}>Mostrar Detalles</Button>}
            {handleClick && <p>Ubicación: {datosDetalles.location.name == null ? `SIN DATOS` : datosDetalles.location.name}</p>}
            {handleClick && <p>Cámara: {datosDetalles.exif.model == null ? `SIN DATOS` : datosDetalles.exif.model}</p>}
            {handleClick && 
                <Flex gap='5px'>
                    {datosDetalles.tags.map((elemento,indice)=>
                        indice < 4 && 
                            <Link color='red' key={indice} href='#'>{elemento.title}</Link>
                    )}
                </Flex>
            }
        </div>
    )
}

export { CardFoto }

