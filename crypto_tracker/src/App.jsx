import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route, Link } from "react-router-dom"
import { Layout, Typography, Space} from "antd"
import NavBar from "./components/navBar"

function App() {
  

  return (
    <div className="App">
      <div className="navBar">
        <NavBar />
      </div>
      <div className="main"></div>
      <div className="footer"></div>
      
    </div>
  )
}

export default App
