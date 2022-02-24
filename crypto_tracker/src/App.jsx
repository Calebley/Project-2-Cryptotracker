import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Outlet, Link } from "react-router-dom"
import { Layout, Typography, Space} from "antd"
import { NavBar, Exchanges, Homepage, Cryptocurrencies, CryptoInfo, News } from "./components"

function App() {
  

  return (
    <div className="App">
      <div className="navBar">
        <NavBar />
      </div>
      
      <div className="footer">
        <Typography.Title level={5} styles={{ color: "white", textAlign: "center" }}>
          Cryptotracker <br />
        </Typography.Title>

        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
          
        </Space>
      </div>
      <Outlet />
    </div>
  )
}

export default App
