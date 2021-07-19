import React, { Component } from 'react'
import { Route,Link} from 'react-router-dom'
import './App.css'
class App extends Component {
  state = {
    totalData: '从入口文件过来的数据'
  }
  render() {
    const { totalData } = this.state
    return (
      <div className="">
        <h1>React-Demo</h1>
        <nav className='left'>
            <Link to={{pathname: '/home', state: totalData}}>Home</Link>
        </nav>
        <div className='right'>
          {/* 路由切換 */}
          <Route path='/Home' component={Home} />
        </div>
      </div>
    )
  }}
class Home extends Component {
  render() {
      const { state } = this.props.location
      return (
          <div>
              Home:{state}
          </div>
      )
  }
}

export default App
