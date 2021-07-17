import React, { Component } from 'react'
import qs from 'qs'
export default class Home extends Component {
    render() {
        const { search } = this.props.location
        const res = qs.parse(search.substring(1))
        return (
            <div>
                Home: {res.totalData}
            </div>
        )
    }
}
