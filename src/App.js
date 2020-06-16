import React, { Component } from 'react';

export default class App extends Component {
    state = { name: 'Iuri' }
    render() {
        return <div id='hello'>Hello, {this.state.name}</div>;
    }
}
