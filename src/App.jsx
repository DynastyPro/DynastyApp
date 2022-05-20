import React from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './Pages/AboutPage'
import Home from './Pages/Home.jsx'
import ListingPage from './Pages/Listing'
import Register from './Pages/Register'
import ListedCollection from './Pages/ListedCollection'


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