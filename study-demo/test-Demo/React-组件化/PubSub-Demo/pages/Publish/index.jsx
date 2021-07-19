import React, { Component } from 'react'
import PubSub from 'pubsub-js'
export default class Publish extends Component {
    state = {
        value: '我是publish传给Subscribe的数据'
    }
    handleValue = (dataType, value) => {
        PubSub.publish('data of publish', this.state.value)
    }
    render() {
        return (
            <div>
                <h1>Publish</h1> 
                <button onClick={this.handleValue}>点击发送数据</button>
            </div>
        )
    }
}

