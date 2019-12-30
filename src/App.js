import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css'
import { Provider } from 'react-redux'
import configureStore from './redux/store'
import Home from './components/Home'
import Recipe from './components/Recipe'


const store = configureStore()

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div>
        
      <Router>
      <Switch>
      <Route   
            path="/home"
            render={props => (
              <Home
                {...props}
              />
            )}
        />
        <Route     
            path="/recipe/:id"
            render={props => (
              <Recipe
                {...props}
              />
            )}
        />

      </Switch>
      </Router>
      </div>
     </Provider>
    )
  }
}

