import React, { Component, lazy, Suspense } from 'react'
// import About from './pages/About'
// import Home from './pages/Home'
import Loading from './pages/Loading'
import MyNavLink from './components/MyNavLink'
import { Route} from 'react-router-dom'
import './App.css'
const About = lazy(() => import('./pages/About'))
const Home = lazy(() => import('./pages/Home'))
class App extends Component {

  render() {
    return (
      <div className="">
        <h1>React-Demo</h1>
        <nav className='left'>
            <MyNavLink to="/about">
              <h1>ok</h1>
            </MyNavLink>
            <MyNavLink to="/home">Home</MyNavLink>
        </nav>
        <div className='right'>
          {/* 路由切換 */}
          <Suspense fallback={<Loading />}>
            <Route path='/about' component={About} />
            <Route path='/home' component={Home} />
          </Suspense>
        </div>
      </div>
    )
  }}

export default App
