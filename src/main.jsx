import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'


import App from './App'

import Personajes from './pages/Personajes'
import Personaje from './pages/Personaje'
import Locations from './pages/Locations'
import Episodios from './pages/Episodios'


import './index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/personajes" element={<Personajes />} />
        <Route path="/personajes/:id" element={<Personaje />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/episodios" element={<Episodios />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
