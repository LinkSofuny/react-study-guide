import React, { Component } from 'react';
import Son from '../Son'

class Father extends Component {
    render() {
        return (
        <div className='father'>
            <h4>Father Component</h4>
            <Son />
        </div>
        );
    }
}

export default Father;