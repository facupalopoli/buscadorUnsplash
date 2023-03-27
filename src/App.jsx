import { useState } from 'react'
import './App.css'
import { ListaFotos, Navbar, ListaBusqueda } from './Components';
import { ChakraProvider } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <ChakraProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<ListaFotos/>} />
          <Route path='/search/:searchQuery' element={<ListaBusqueda/>} />
        </Routes>
      </ChakraProvider>
    </div>
  )
}

export default App
