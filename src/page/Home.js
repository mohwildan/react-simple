import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../Hero/Hero'
import About from '../components/About/About'
import Contact from '../components/contact/Contact'

function Home() {
  return (
      <>
      <Navbar />
    <Routes>
        <Route path='/' element={<Hero />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
    </Routes>
      </>
  )
}

export default Home