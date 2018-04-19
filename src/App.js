import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import Description from './components/Description'
import Transport from './components/Transport'
import Customs from './components/Customs'
import Storage from './components/Storage'
import NextStep from './components/NextStep'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Description />
        <Transport />
        <Customs />
        <Storage />
        <NextStep />
      </div>
    );
  }
}

export default App
