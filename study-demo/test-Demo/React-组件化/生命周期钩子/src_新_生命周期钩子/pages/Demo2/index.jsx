import React, { Component } from 'react'

export default class index extends Component {
    state = {
        childName: 'Father'
    }
    changeState = () => {
        this.setState({})
    }
    render() {
        console.log('render', '父组件进行渲染')
        return (
            <div >
                <button onClick={this.changeState} > 父组件重新render()</button>
                <Child/>
            </div>
        )
    }
    componentDidMount() {
        console.log('--------------点击click后--------------')
    }
}
class Child extends Component {

    state = {
        childName: 'Link'
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', '组件数据发生改变', '|nextProps', nextProps, '|nextState', nextState)
        return true
    }
   
    render() {
        console.log('render', '进行渲染')
        return (
            <div>
                <h1>本组件数据: {this.state.childName}</h1>
            </div>
        )
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate',' 快照触发 ', '|prevProps',prevProps, '|prevstate', prevState)
        return '我是来自getSnapshotBeforeUpdate的数据'
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', '组件数据加载完毕', '|prevProps',prevProps, '|prevstate', prevState, '|snapshot', snapshot);
    }
    
}
