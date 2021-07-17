import React, { Component, useState, useEffect } from 'react'

// 函数- 如果以use开头， React 会认为你使用了自定义hook
function SelfHook() {
    
    const [count, setCount] = useAllself(0)
    
    return (
        <div>
            <h4>Home Component</h4>
            <h5>count: {count}</h5>
            <button onClick={() => setCount(count + 1)}>count add</button>
        </div>
    )
}
// 这部分逻辑就可以使用到任何其他组件中去了
function useAllself(initState) {

    const [count, setCount] = useState(initState)

    useEffect(() => {
        console.log('count', count) // 监听
    })
    // 如果值为偶数， 就返回
    return [count, setCount]

}
export default SelfHook