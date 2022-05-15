import React from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './pages/AboutPage'
import Home from './pages/Home'
import ListingPage from './pages/Listing'
import Register from './pages/Register'


function App() {
  return (
    <>
        <Router>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/listing' element={<ListingPage/>} />
                <Route path='/register' element={<Register/>} />
            </Routes>
        </Router>
    </>
  )
}

export default App