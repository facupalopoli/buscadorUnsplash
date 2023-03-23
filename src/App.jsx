import { useState } from 'react'
import './App.css'
import { ListaFotos, Navbar } from './Components';
import { ChakraProvider } from '@chakra-ui/react'
/* import { Route, Routes } from 'react-router-dom' */

function App() {

  const [propBusqueda, setPropBusqueda] = useState('')
  
  return (
    <div className="App">
      <ChakraProvider>
        <Navbar propBusqueda={propBusqueda} setPropBusqueda={setPropBusqueda}/>
        <ListaFotos busqueda={propBusqueda}/>
      </ChakraProvider>
    </div>
  )
}

export default App
