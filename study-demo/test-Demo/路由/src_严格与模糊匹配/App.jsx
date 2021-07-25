import React, { Component } from 'react'
import About from './pages/About'
import Home from './pages/Home'
import HomeA from './pages/HomeA'
import { Route,Link } from 'react-router-dom'
import './App.css'
class App extends Component {
  render() {
    return (
      <div className="">
        <h1>React-Demo</h1>
        <nav className='left'>
            <Link to='/about'>
              About
            </Link>
            <Link to="/home">Home</Link>
            <Link to="/home/a" >HomeA</Link>
        </nav>
        <div className='right'>
          {/* 路由切換 */}
            <Route path='/about' component={About} />
            <Route path='/home' component={Home}  exact/>
            <Route path='/home/a' component={HomeA} />
        </div>
      </div>
    )
  }
}

export default App