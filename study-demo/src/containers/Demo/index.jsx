import React, { Component } from 'react'
import './index.css'
export default class index extends Component {
    state = {
        hasErr : '',
        ErrNum: 0
    }
    // 从Error中获得一个state状态, 
    static getDerivedStateFromError(err) {
        console.log('err', err)
        return {hasErr: err}
    }
    componentDidCatch(error, errorInfo) {
        console.log('发生错误咯', error, errorInfo)
    }

    render() {
        return (
            <div className='index' >
                <h1 >index</h1>
								{/* 错误对象存在,则渲染条件成立的DOM*/}
                {this.state.hasErr ? <h1>这里发生错误了</h1> : <A />}
            </div>
        )
    }
}

class A extends Component {
    state = {
        person: ''
        // [
        //     {name: 'link', age: 1},
        //     {name: 'link', age: 2}
        // ]
    }
    render() {
        
        return (
            <div className='A'>
                <h1>AAA</h1>
                {
                    this.state.person.map(item => { // 这里抛错
                        return <p key={item.age}>{item.name + '--' + item.age}</p>
                    })
                }
            </div>
        )
    }
}