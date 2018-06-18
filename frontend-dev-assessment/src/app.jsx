//React
import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react';
//Files
import BoardContainer from './containers/BoardContainer.jsx'


export default class App extends Component {
    render() {
        const numberOfBoardContainers = new Array(1, 2, 3)
        const threeBoards = numberOfBoardContainers.map((ele, ind) => {
            return <div className='boards-container' key={ind}>
                <BoardContainer id={ind} key={ind + 1} />
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