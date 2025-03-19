import { useState } from 'react'
import viteLogo from '/vite.svg'
import HomePage from './pages/HomePage'
import Navbar from "./components/NavBar"
import { Box } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import BookNow from './pages/BookNow'


function App() {
  return (
    <>
      <Box minH={"100vh"}>
        <Navbar />
        <Routes>
          <Route path="/" element= {<HomePage />} />
          <Route path="/book-now" element= {<BookNow />} />
        </Routes>
      </Box>
    </>
  )
}

export default App
