import React, { Component } from 'react'
import Grandpa from './pages/Grandpa'
import './App.css'
class App extends Component {
  state = {
    totalData: {
      title: '从入口文件过来的数据',
      age : 20
    }
  }
  render() {
    return (
      <div className="app">
        <h1>React-Demo</h1>
        <Grandpa />
      </div>
    )
  }
}


export default App
