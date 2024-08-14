import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import About from './pages/About/index.jsx'
import Services from './pages/Services.jsx'
import Pricing from './components/Pricing.jsx'
import Work from './components/Work.jsx'
import Blog from './components/Blog.jsx'
import Contactus from './components/Contactus.jsx'
import Home from './pages/Home.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<App > </App >} />
        <Route path="/about" element={<About > </About >} />
        <Route path="/services" element={<Services></Services>} />
        <Route path="/pricing" element={<Pricing></Pricing>} />
        <Route path="/work" element={<Work></Work>} />
        <Route path="/blog" element={<Blog></Blog>} />
        <Route path="/contact" element={<Contactus></Contactus>} />
        <Route path="/home" element={<Home></Home>} />
      </Routes>
    </BrowserRouter >
  </React.StrictMode >,
)
