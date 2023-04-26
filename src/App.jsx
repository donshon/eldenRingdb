import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import ItemListPage from './pages/ItemListPage/ItemListPage';
import ItemDetailsPage from './pages/ItemDetailsPage/ItemDetailsPage';

//npm create vite@latest
//npm install
//npm run dev

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/categories/:item" element={<ItemListPage />}/>
          <Route path="/:category/:id" element={<ItemDetailsPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
