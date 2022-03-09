import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css'
import App from './App'
import { Exchanges, Homepage, Cryptocurrencies, CryptoInfo, News } from "./components"
import store from "./app/store"
import { Provider } from "react-redux"



const rootElement = document.getElementById("root")
render(
  <BrowserRouter basename="/Project-2-Cryptotracker">
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<App />} >
          <Route path="/exchanges" element={<Exchanges />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
          <Route path="/crypto/:coinId" element={<CryptoInfo />} />
          <Route path="/news" element={<News />} />
        </Route>
      </Routes>
    </Provider>
  </BrowserRouter>,
  rootElement
)
