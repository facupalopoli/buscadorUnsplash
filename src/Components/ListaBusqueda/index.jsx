import React, { useEffect, useState, useRef } from 'react';
import { Container, Text, Input } from '@chakra-ui/react';
import './ListaBusqueda.css'
import axios from 'axios'
import { CardFoto } from '../CardFoto';
import { useParams } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroller';
import { NoResults } from '../NoResults';
import { Loader } from '../Loader';


const ListaBusqueda = () => {
    
    const [datosFotos, setDatosfotos] = useState([])
    const [hasMoreItems, setHasMoreItems] = useState(true)
    /* const [pageNumber, setPageNumber] = useState(1) */
    const pageNumber = useRef(1);
    const accessKey = '_AOQg1DMgNmM7pq5nY7XTVPCBqYY8me_Exw9l81sW1Y'
    const {searchQuery} = useParams()

    const obtenerFotosBusqueda = async () => {
            const response = await axios.get(`https://api.unsplash.com/search/photos?query=${searchQuery}&client_id=${accessKey}&page=${pageNumber.current}`)
            console.log(response)
            console.log(`funcion ${pageNumber.current}`)
            const datos = response.data.results
            setDatosfotos([...datosFotos, ...datos])
            setHasMoreItems(datos.length > 0)
            pageNumber.current = pageNumber.current + 1;
        }

    useEffect(()=>{
        setDatosfotos([])
        pageNumber.current = 1;
        console.log(`useefect ${pageNumber.current}`)
        obtenerFotosBusqueda()
    },[searchQuery])

    if(!hasMoreItems ){
        return(
            <NoResults />
        )
    }else{
          return(
            <InfiniteScroll
                    className='listadoFotos'
                    pageStart={1}
                    loadMore={obtenerFotosBusqueda}
                    hasMore={hasMoreItems}
                    loader={<Loader key={0} />}
                >
                {datosFotos.map((elemento, indice)=>
                    <CardFoto key={`${indice}${elemento.id}`} myKey={elemento.id} imagen={elemento.urls.small} descriptionImagen={elemento.alt_description} userName={elemento.user.name} linkUser={elemento.user.links.html}/>
                )}
            </InfiniteScroll>  
        )
    }
    
}

export { ListaBusqueda }