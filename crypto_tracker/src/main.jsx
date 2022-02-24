import React from 'react'
import ReactDOM, { render } from 'react-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css'
import App from './App'
import { NavBar, Exchanges, Homepage, Cryptocurrencies, CryptoInfo, News } from "./components"




const rootElement = document.getElementById("root")
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route path="/exchanges" element={<Exchanges />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
        <Route path="/cryptoinfo/:coinId" element={<CryptoInfo />} />
        <Route path="/news" element={<News />} />
      </Route>


    </Routes>
  </BrowserRouter>,
  rootElement
)
