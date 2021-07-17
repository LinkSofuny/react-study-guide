import React, { Component, useState, useEffect } from 'react'

// 函数- 如果以use开头， React 会认为你使用了自定义hook
function EffectHook() {
    
    const [count, setCount] = useState(0)

    useEffect(() => {
        // 这个函数相当于 componentDidMount + componentDidUpdate
        console.log('页面初始化完毕/更新数据完毕')
        // 返回的函数就相当于 componentWillUnmount
        return () => {
            // 做一些清理处理， 如清理一个定时器 clearInterval()
            // 严格来讲，仅在清理副作用上与componentWillUnmount功能类似， 但是并非等同于卸载钩子
        }
    })
    function add() {
        setCount(count + 1)
    }
    return (
        <div>
            <h4>Home Component</h4>
            <h5>count: {count}</h5>
            <button onClick={add}>count add</button>
        </div>
    )
}

// 对照(类)
// class EffectHook extends Component{

//     state = {
//         count: 0
//     }
//     componentDidMount() {
//         console.log('页面初始化完毕')
//     }
//     componentDidUpdate() {
//         console.log('更新数据完毕')
//     }
//     render() {
//         return (
//             <div>
//                 <h4>Home Component</h4>
//                 <h5>count: {this.state.count}</h5>
//                 <button onClick={() => this.setState({count: this.state.count + 1})}>count add</button>
//             </div>
//         )
//     }
//     componentWillUnmount() {
//         console.log('组件即将卸载') // 仅演示， effect函数的返回函数跟它还是有一些差别，
//     }
// }
export default EffectHook