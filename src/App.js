import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import Description from './components/Description'
import Transport from './components/Transport'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Description />
        <Transport />
      </div>
    );
  }
}

export default App
