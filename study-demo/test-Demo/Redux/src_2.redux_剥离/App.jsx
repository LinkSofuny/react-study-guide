import React, { Component } from 'react'
import ComponentA from "./containers/ComponentA";
import store from './redux/store';
export default class App extends Component {
    render() {
        return (
            <div>
                <ComponentA store={store}/>
            </div>
        )
    }
}
