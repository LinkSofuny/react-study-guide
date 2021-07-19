import React, { Component } from 'react'
import './index.css'
import store from '../../redux/store'
import { addAction } from '../../redux/actions/addAction'
export default class ComponentA extends Component {
    addCOunt = () => {
        store.dispatch(addAction(1))
    }
    render() {
        return (
            <div className='C-A'>
                <h1>ComponentA</h1>
                <p>count: {store.getState()}</p>
                <button onClick={this.addCOunt} >click add</button>
            </div>
        )
    }
}
