import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react';
//Files
import BoardContainer from './containers/BoardContainer.jsx'
import './styles/styles.css'


export default class App extends Component {
    render() {
        return (
            <div>
                <div style={{ margin: '10px' }}>
                    <BoardContainer />
                </div>
                <div style={{ margin: '10px' }}>
                    <BoardContainer />
                </div>
            </div>
        )
    }
}

// ReactDOM.render(<App />, document.getElementById('app'))