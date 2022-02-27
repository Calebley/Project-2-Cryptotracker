import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Outlet, Link } from "react-router-dom"
import { NavBar, Exchanges, Homepage, Cryptocurrencies, CryptoInfo, News } from "./components"

function App() {
  

  return (
    <div className="App">
      <div className="navBar">
        <NavBar />
      </div>
      

      <Outlet />
    </div>
  )
}

export default App
