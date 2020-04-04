import React from 'react'
import './App.css'
import { Home, About, Donate } from "./pages"
import { DiscountsProvider } from './store/index'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

function App() {
  return (
    <DiscountsProvider>
      <Router className="App">
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/donate">
            <Donate />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </DiscountsProvider>
  );
}

export default App;
