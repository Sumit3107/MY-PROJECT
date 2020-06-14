import React, { Component } from 'react'

export class header extends Component {
    render() {
        return (
            <header style={headerStyle}>
                <h1>Time Tracker</h1>
                <p>Time is precious,don't waste</p>
            </header>
        )
    }
}
const headerStyle={
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

export default header
