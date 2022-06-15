import React from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './pages/AboutPage'
import Home from './pages/Home.jsx'
import ListingPage from './pages/Listing'
import Register from './pages/Register'
import ListedCollection from './pages/ListedCollection'


function App() {
  return (
    <>
        <Router>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/listing' element={<ListingPage/>} />
                <Route path='/register' element={<Register/>} />
                <Route path='/ListedCollection' element={<ListedCollection/>} />
            </Routes>
        </Router>
    </>
  )
}

export default App
