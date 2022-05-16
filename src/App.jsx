import React from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './Pages/AboutPage'
import Home from './Pages/Home'
import ListingPage from './Pages/Listing'
import Register from './Pages/Register'


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