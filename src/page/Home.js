import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../Hero/Hero'
import About from '../components/About/About'

function Home() {
  return (
      <>
      <Navbar />
    <Routes>
        <Route path='/' element={<Hero />}/>
        <Route path='/about' element={<About />}/>
    </Routes>
      </>
  )
}

export default Home