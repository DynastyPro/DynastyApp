import React from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './pages/aboutpage'
import Home from './pages/home'

function App() {
  return (
    <>
        <Router>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About/>} />
            </Routes>
        </Router>
    </>
  )
}

export default App