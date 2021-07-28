import React, { Component, useState, useRef } from 'react'

// 函数- 如果以use开头， React 会认为你使用了自定义hook
function RefHook() {
    
    const [count, setCount] = useState(0)
    const countRef = useRef()
    const headerRef = useRef()
    function showInfo () {
        console.log('countRef', countRef)
        console.log('headerRef', headerRef)
    }
    return (
        <div>
            <h4>Home Component</h4>
            <h5 ref={headerRef}>header</h5>
            <input type="text" ref={countRef} onChange={showInfo}/>
        </div>
    )
}

// 对照(类)
// class RefHook extends Component{

//     state = {
//         count: 0
//     }
//     showInfo = () => {
//         console.log('countRef', this.refs.countRef)
//         console.log('headerRef', this.refs.headerRef)
//     }
//     render() {
//         return (
//             <div>
//                 <h4>Home Component</h4>
//                 <h5  ref='headerRef' >header</h5>
//                 <input type="text" ref='countRef' onChange={this.showInfo}/>
//             </div>
//         )
//     }
// }


export default RefHook