import React, { Component } from 'react'
import './index.css'
export default class index extends Component {
    render() {
        return (
            <div className='index' >
                <h1 >index</h1>
                <A render={(name, age) => <B  name={name} age={age}/>}/>
            </div>
        )
    }
}
class A extends Component {
    state = {
        name: '我是A传递给B的数据',
        age: '我也是呢'
    }
    render() {
        const { name, age } = this.state
        return (
            <div className='A'>
                <h1>AAA</h1>
                {this.props.render( name, age )}
            </div>
        )
    }
}
class B extends Component {
    render() {
        return (
            <div className='B'>
                <h1>BBB</h1>
                {this.props.name}<br />
                {this.props.age}
            </div>
        )
    }
}