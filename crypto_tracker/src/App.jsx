import './App.css'
import { Outlet } from "react-router-dom"
import { NavBar } from "./components"
import "antd/dist/antd.css";
import "./index.css";


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
