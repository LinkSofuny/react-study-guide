import React, { Component, useState } from 'react'

// 函数- 如果以use开头， React 会认为你使用了自定义hook
function StateHook() {
    
    const [count, setCount] = useState(0)

    return (
        <div>
            <h4>Home Component</h4>
            <h5>count: {count}</h5>
            <button onClick={() => setCount(count + 1)}>count add</button>
            {/* 传函数 */}
            <button onClick={() => setCount(count => count + 1)}>count add</button>
        </div>
    )
}

// 对照(类)
// class StateHook extends Component{

//     state = {
//         count: 0
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
// }


export default StateHook