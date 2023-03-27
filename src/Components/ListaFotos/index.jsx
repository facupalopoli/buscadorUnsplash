import React, { useEffect, useState } from 'react';
import { Container, Text, Input } from '@chakra-ui/react';
import './ListaFotos.css'
import axios from 'axios'
import { CardFoto } from '../CardFoto';
import InfiniteScroll from 'react-infinite-scroller';

const ListaFotos = () => {
    
    const [datosFotos, setDatosfotos] = useState([])
    const [hasMoreItems, setHasMoreItems] = useState(true)
    const accessKey = '_AOQg1DMgNmM7pq5nY7XTVPCBqYY8me_Exw9l81sW1Y'

    const obtenerFotosRandom = async () => {
            const response = await axios.get(`https://api.unsplash.com/photos/random/?client_id=${accessKey}&count=30`)
            console.log(response)
            const datos = response.data
            setDatosfotos([...datosFotos, ...datos])
            setHasMoreItems(datos.length > 0)
        }   

    useEffect(()=>{
        obtenerFotosRandom()
    },[])

    console.log(datosFotos)
        
    return(        
            <InfiniteScroll
                className='listadoFotos'
                pageStart={0}
                loadMore={obtenerFotosRandom}
                hasMore={hasMoreItems}
                loader={<div className="loader" key={0}>Loading ...</div>}
            >      
                {datosFotos.map((elemento, indice)=>
                    <CardFoto key={`${indice}${elemento.id}`} myKey={elemento.id} imagen={elemento.urls.small} descriptionImagen={elemento.alt_description} userName={elemento.user.name} linkUser={elemento.user.links.html}/>
                )}
            </InfiniteScroll>    
    )
}

export { ListaFotos }