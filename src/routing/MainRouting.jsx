import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from '../Redux/action/Home'
import MainPage from '../screen/MainPage'

export default function MainRouting() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='' element={<MainPage/>}/>
        <Route path='/home' element={<Home/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}
