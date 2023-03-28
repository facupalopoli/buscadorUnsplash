import React, { useState, useEffect } from 'react';
import { Container, Heading, Text, Input, Flex, Button } from '@chakra-ui/react';
import {motion} from 'framer-motion'
import { MdOutlineLinkedCamera } from "react-icons/md";
import './Navbar.css'
import { useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const icon = {
        hidden: {
          pathLength: 0,
          fill: "rgba(255, 255, 255, 0)",
          scale:0.9
        },
        visible: {
          pathLength: 1,
          fill: "rgba(84, 135, 158, 1)",
          scale:1.2
        }
      }
    
    const location = useLocation();
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('')
    
    const handleClick = () =>{
      navigate(`/search/${searchQuery}`)
    }

    useEffect(() => {
      const pathname = location.pathname // Obtener la ruta actual
      const pathArray = pathname.split("/") // Dividir la ruta por cada '/'
      const textFromUrl = pathArray.pop() // Obtener el último segmento de la ruta
      setSearchQuery(textFromUrl) // Establecer el valor del Input con el texto de la URL
    }, [location]);
    
    return(
        <div className='header'>
            <Flex alignItems='center' padding='20px'>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" fontSize="6rem" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M4 18h16c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2zM4 5h16v11H4V5zM1 19h22v2H1z"></path><motion.path variants={icon}
                                initial="hidden"
                                animate="visible"
                                transition={{duration:1, repeat: Infinity, ease:'easeInOut', type:'spring'}} 
                                className='lupa' 
                                d="M13.97 7.53c-1.37-1.37-3.58-1.37-4.95 0s-1.37 3.58 0 4.95c1.18 1.18 3 1.34 4.36.47l2.09 2.09 1.06-1.06-2.09-2.09c.87-1.36.72-3.18-.47-4.36zm-1.06 3.88c-.78.78-2.05.78-2.83 0-.78-.78-.78-2.05 0-2.83s2.05-.78 2.83 0c.78.79.78 2.05 0 2.83z"></motion.path></svg>
                <Heading as='h1' size='2xl'>
                    Fotos<span className='libre'>FREE</span>
                </Heading>
            </Flex>
            <Flex gap='10px' w='60vw'>
              <Input bg='white' value={searchQuery} fontSize='1.5rem' p='20px' placeholder='Search' type='text' onChange={(e)=> setSearchQuery(e.target.value)}/>
              <Button onClick={handleClick}><MdOutlineLinkedCamera fontSize='1.5rem'/></Button>
            </Flex>
        </div>
    )
}

export { Navbar }