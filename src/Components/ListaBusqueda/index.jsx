import React, { useEffect, useState } from 'react';
import { Container, Text, Input } from '@chakra-ui/react';
import './ListaBusqueda.css'
import axios from 'axios'
import { CardFoto } from '../CardFoto';
import { useParams } from 'react-router-dom';


const ListaBusqueda = () => {
    
    const [datosFotos, setDatosfotos] = useState([])
    const accessKey = '_AOQg1DMgNmM7pq5nY7XTVPCBqYY8me_Exw9l81sW1Y'
    const {searchQuery} = useParams()
    
    useEffect(()=>{
        const obtenerFotosBusqueda = async () => {
            const response = await axios.get(`https://api.unsplash.com/search/photos?query=${searchQuery}&client_id=${accessKey}`)
            const datos = response.data.results
            setDatosfotos(datos)
        }   
        obtenerFotosBusqueda()
    },[searchQuery])

    return(
        <div className='listadoFotos'>
            {datosFotos.map((elemento, indice)=>
                <CardFoto key={`${indice}${elemento.id}`} myKey={elemento.id} imagen={elemento.urls.small} descriptionImagen={elemento.alt_description} userName={elemento.user.name} linkUser={elemento.user.links.html}/>
            )}
        </div>
    )
}

export { ListaBusqueda }