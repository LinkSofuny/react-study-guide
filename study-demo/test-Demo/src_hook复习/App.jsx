import React, { Component } from 'react'
import UseState from './pages/UseState'
import UseEffect from './pages/UseEffect'
import UseRef from './pages/UseRef'
import UseSelf from './pages/UseSelf'
class App extends Component {
  state = {
    totalData: {
      title: '从入口文件过来的数据',
      age : 20
    }
  }
  render() {
    return (
      <div className="">
        <h1>React-Demo</h1>
        {/* 每个hooks都分成了一个单独的组件 记得分别解开注释  （ ctrl + /  ）  */}
        {/* <UseState /> */}
        {/* <UseEffect /> */}
        {/* <UseRef /> */}
        <UseSelf /> {/* 自定义Hook */}
      </div>
    )
  }
}


export default App
