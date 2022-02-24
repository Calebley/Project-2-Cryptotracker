import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Routes, Route, Link } from "react-router-dom"
import { Layout, Typography, Space} from "antd"
import { NavBar, Exchanges, Homepage, Cryptocurrencies, CryptoInfo, News } from "./components"

function App() {
  

  return (
    <div className="App">
      <div className="navBar">
        <NavBar />
      </div>
      
      <div className="footer">
        <Typography.Title >
          Cryptotracker <br />
        </Typography.Title>
      </div>
      
    </div>
  )
}

export default App
