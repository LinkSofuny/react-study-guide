import React, { Component } from 'react'
import PubSub from 'pubsub-js'
export default class Subscribe extends Component {
    state = {
        receivedData: ''
    }
    token = PubSub.subscribe('data of publish', (msg, data) => {
        this.setState({
            receivedData: data
        })
    })
    render() {
        return (
            <div>
                <h1>Subcribe: </h1>
                <div>{this.state.receivedData}</div>
            </div>
        )
    }
    componentWillUnmount() {
        PubSub.unSubscribe(this.token)
    }
}






