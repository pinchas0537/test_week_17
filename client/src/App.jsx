import React from 'react'
import { Route, Routes } from 'react-router'
import Data from './pages/Data'
import Puzzle from './pages/Puzzle'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Data/>}/>
      <Route path='/puzzle' element={<Puzzle/>}/>
    </Routes>
  )
}
