import React, { Component } from 'react'
import Publish from './pages/Publish'
import Subscribe from './pages/Subscribe'
export default class App extends Component {
    render() {
        return (
            <div>
                <Publish />
                <Subscribe />
            </div>
        )
    }
}
