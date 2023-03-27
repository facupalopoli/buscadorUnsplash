import React, { useEffect, useState } from 'react';
import { Container, Text, Input } from '@chakra-ui/react';
import './ListaBusqueda.css'
import axios from 'axios'
import { CardFoto } from '../CardFoto';
import { useParams } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroller';


const ListaBusqueda = () => {
    
    const [datosFotos, setDatosfotos] = useState([])
    const [hasMoreItems, setHasMoreItems] = useState(true)
    const [pageNumber, setPageNumber] = useState(1)
    const accessKey = '_AOQg1DMgNmM7pq5nY7XTVPCBqYY8me_Exw9l81sW1Y'
    const {searchQuery} = useParams()

    const obtenerFotosBusqueda = async () => {
            const response = await axios.get(`https://api.unsplash.com/search/photos?query=${searchQuery}&client_id=${accessKey}&page=${pageNumber}`)
            console.log(response)
            const datos = response.data.results
            setDatosfotos([...datosFotos, ...datos])
            setHasMoreItems(datos.length > 0)
            setPageNumber(pageNumber + 1)
        }

    useEffect(()=>{
        setDatosfotos([])
        obtenerFotosBusqueda()
    },[searchQuery])

    return(
        <InfiniteScroll
                className='listadoFotos'
                pageStart={0}
                loadMore={obtenerFotosBusqueda}
                hasMore={hasMoreItems}
                loader={<div className="loader" key={0}>Loading ...</div>}
            >
            {datosFotos.map((elemento, indice)=>
                <CardFoto key={`${indice}${elemento.id}`} myKey={elemento.id} imagen={elemento.urls.small} descriptionImagen={elemento.alt_description} userName={elemento.user.name} linkUser={elemento.user.links.html}/>
            )}
        </InfiniteScroll>  
    )
}

export { ListaBusqueda }