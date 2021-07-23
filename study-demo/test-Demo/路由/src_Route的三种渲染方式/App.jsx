import React, { Component } from 'react'
import About from './pages/About'
import Nav from './pages/Nav'
import { Route,Link} from 'react-router-dom'
import './App.css'
class App extends Component {

  refCallback = node => {
    console.log(node)
  }
  render() {
    return (
      <div className="">
        <h1>React-Demo</h1>
        <nav className='left'>
            <Link to='/about'>
              About
            </Link>
            <Link to="/home">Home</Link>
            <Link to="/nav">Nav</Link>
        </nav>
        <div className='right'>
          {/* 路由切換 */}
          <Route path='/about' component={About} />
          <Route path='/home' render={
            props => (
              <div {...props} >Home</div>
            )
          } />
          <Route path='/nav' children={
            ({props, match}) => (
              match ? <Nav {...props}/> : <div>默认</div>
            )
              
          } />
        </div>
      </div>
    )
  }}

export default App