import React, { Component } from 'react';
import MyContext from '../../context'

// class Son extends Component {
//     static contextType = MyContext;
//     render() {
//         return (
//             <div className='son'>
//                 <h4>Son Component</h4>
//                 <p>info: {this.context}</p>
//             </div>
//         );
//     }
// }
function Son() {
    return (
        <div className='son'>
            <h4>Son Component</h4>
            <MyContext.Consumer>
                {
                    value => {
                        return <p>info: {value}</p>
                    }
                }
            </MyContext.Consumer>
            
        </div>
    );
}

export default Son;


