import React, { Component } from 'react'
import './index.css'
import { addAction, addActionAsync } from '../../redux/actions/addAction'
import { connect } from 'react-redux'
class ComponentA extends Component {
    addCount = () => {
        this.props.addCount(1)
    }
    addCountAsync = () => {
        this.props.addCountAsync(1, 1000)
    }
    render() {
        const { add } = this.props.state
        return (
            <div className='C-A'>
                <h1>ComponentA</h1>
                <p>count: {add}</p>
                <button onClick={this.addCount} >click add</button>
                <button onClick={this.addCountAsync} >click addCountAsync</button>
            </div>
        )
    }
}
export default connect(
    (state) => {
        return {
            state
        }
    },
    (dispatch) => {
        return {
           addCount: (value) => dispatch(addAction(value)),
           addCountAsync: (value) => dispatch(addActionAsync(value)),
        }
    }
)(ComponentA)