import React, { Component, Fragment, useState, createContext } from 'react'
import MyContext from '../../context'
import Father from '../Father'
function Grandpa() {

    const [grandpaInfo, setGranpaInfo] = useState('我是来自爷爷的信息')

    return (
        <div className='grandpa'>
            <h4>Grandpa Component</h4>
            <MyContext.Provider value={grandpaInfo}>
                <Father />
            </MyContext.Provider>
        </div>
    )
}



export default Grandpa

