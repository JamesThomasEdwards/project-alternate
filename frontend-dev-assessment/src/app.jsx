import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react';
//Files
import BoardContainer from './containers/BoardContainer.jsx'


export default class App extends Component {
    render() {
        const threeBoards = [0, 1, 2].map(ele => {
            return <div className='boards-container'>
                <BoardContainer id={ele} key={ele} />
            </div>
        })
        return (
            <div>
                {threeBoards}
            </div>
        )
    }
}

// ReactDOM.render(<App />, document.getElementById('app'))