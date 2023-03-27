import React, { useEffect, useState } from 'react';
import { Container, Text, Input } from '@chakra-ui/react';
import './ListaFotos.css'
import axios from 'axios'
import { CardFoto } from '../CardFoto';

const ListaFotos = () => {
    
    const [datosFotos, setDatosfotos] = useState([])
    const accessKey = '_AOQg1DMgNmM7pq5nY7XTVPCBqYY8me_Exw9l81sW1Y'
    
    useEffect(()=>{
        const obtenerFotosRandom = async () => {
            const response = await axios.get(`https://api.unsplash.com/photos/random/?client_id=${accessKey}&count=10`)
            const datos = response.data
            setDatosfotos(datos)
        }   
        obtenerFotosRandom()
    },[])
        
    return(
        <div className='listadoFotos'>
            {datosFotos.map((elemento, indice)=>
                <CardFoto key={`${indice}${elemento.id}`} myKey={elemento.id} imagen={elemento.urls.small} descriptionImagen={elemento.alt_description} userName={elemento.user.name} linkUser={elemento.user.links.html}/>
            )}
        </div>
    )
}

export { ListaFotos }