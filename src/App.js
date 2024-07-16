import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Work from './Components/Work'
import NavBar from './Components/NavBar'
import Project from './Components/Project'

const App = () => {
  return (
    <div>
      
      <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/:work' element={<Work/>}/>
            <Route path='/work/:name' element={<Project/>}/>
        </Routes>
       
      </BrowserRouter>

    </div>
  )
}

export default App
