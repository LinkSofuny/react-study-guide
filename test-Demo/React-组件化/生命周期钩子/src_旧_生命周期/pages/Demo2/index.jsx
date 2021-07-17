import React, { Component } from 'react'

export default class index extends Component {
    state = {
        childName: 'Father'
    }
    changeState = () => {
        this.setState({
            childName: 'changedFather'
        })
    }
    render() {
        return (
            <div>
                <Child title={this.state.childName} changeFatherState={this.changeState}/>
            </div>
        )
    }
}
class Child extends Component {
    constructor() {
        super()
        console.log('constructor')
    }
    UNSAFE_componentWillMount () {
        console.log('UNSAFE_componentWillMount');
    }
    state = {
        childName: 'Link'
    }
    changeState = () => {
        this.props.changeFatherState()
        this.setState({
            childName: 'changedLink'
        })
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log('UNSAFE_componentWillReceiveProps', '组件数据发生改变', 'nextProps', nextProps)
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', '组件数据发生改变', '|nextProps', nextProps, '|nextState', nextState)
        return true
    }
    UNSAFE_componentWillUpdate(nextProps, nextState) {
        console.log('UNSAFE_componentWillUpdate', '组件数据发生改变', '|nextProps', nextProps, '|nextState', nextState)
    }
    render() {
        console.log('render', '进行渲染')
        return (
            <div>
                <h1>父组件传入数据: {this.props.title}</h1>
                <h1>本组件数据: {this.state.childName}</h1>
                <button onClick={this.changeState}>changeState</button>
            </div>
        )
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', '组件数据加载完毕', '|prevProps',prevProps, '|prevstate', prevState, '|snapshot', snapshot);
    }
    
}
