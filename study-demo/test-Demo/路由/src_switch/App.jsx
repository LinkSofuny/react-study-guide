import React, { Component } from 'react'
import About from './pages/About'
import Home from './pages/Home'
import { Route,Link, Switch} from 'react-router-dom'
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
        </nav>
        <div className='right'>
          {/* 路由切換 */}
          <Switch>
            <Route path='/about' component={About} />
            <Route path='/home' component={Home} />  {/* 完成匹配 终止 */}
            <Route path='/home' component={Home} />
            <Route path='/home' component={Home} />
          </Switch>
        </div>
      </div>
    )
  }}

export default App