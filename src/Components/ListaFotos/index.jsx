import React, { useEffect, useState } from 'react';
import { Container, Text, Input } from '@chakra-ui/react';
import './ListaFotos.css'
import axios from 'axios'
import { CardFoto } from '../CardFoto';

/* ACCESS KEY _AOQg1DMgNmM7pq5nY7XTVPCBqYY8me_Exw9l81sW1Y
SECRET KEY 9omDP6GlQwWpMyVicmoF-Lkr2fGOkBYJC3Z3oBiuQu4 */

const ListaFotos = ({busqueda}) => {
    
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
    
    /* useEffect(()=>{
        const obtenerFotosBusqueda = async () => {
            const response = await axios.get(`https://api.unsplash.com/search/photos?query=${busqueda}&client_id=${accessKey}`)
            const datos = response.data.results
            setDatosfotos(datos)
        }   
        obtenerFotosBusqueda()
    },[busqueda]) */

    console.log(datosFotos)

    return(
        <div className='listadoFotos'>
            {datosFotos.map((elemento, indice)=>
                <CardFoto key={indice} myKey={elemento.id} imagen={elemento.urls.small} descriptionImagen={elemento.alt_description} userName={elemento.user.name} linkUser={elemento.user.links.html}/>
            )}
        </div>
    )
}

export { ListaFotos }