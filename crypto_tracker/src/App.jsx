import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Switch, Route, Link } from "react-router-dom"
import { Layout, Typography, Space} from "antd"
import { NavBar, Exchanges, Homepage, Cryptocurrencies, CryptoInfo, News  } from "./components"

function App() {
  

  return (
    <div className="App">
      <div className="navBar">
        <NavBar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route exact path="/exchanges">
                <Exchanges />
              </Route>
              <Route exact path="/cryptocurrencies">
                <Cryptocurrencies />
              </Route>
              <Route exact path="/crypto/:coinId">
                <CryptoInfo />
              </Route>
              <Route exact path="/news">
                <News />
              </Route>
            </Switch>
          </div>
        </Layout>
      </div>
      <div className="footer"></div>
      
    </div>
  )
}

export default App
