import React, { Component } from 'react'

export default class Demo extends Component {
    state = {
        value: ''
    }
    handleValue = (dataType, value) => {
        this.setState({[dataType]: value})
    }
    render() {
        return (
            <div>
                <div>姓名:{this.state.name}</div>
                <div>年龄:{this.state.age}</div>
                <input type="text" onChange={ e => this.handleValue('name', e.target.value) } placeholder='姓名'/>
                <input type="text" onChange={ e => this.handleValue('age', e.target.value) }  placeholder='年龄'/>
            </div>
        )
    }
}

