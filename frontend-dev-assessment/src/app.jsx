// React;
import React from 'react';
import { Component } from 'react';
// Files;
import BoardContainer from './containers/BoardContainer.jsx';


export default class App extends Component {
    render() {
        // renders 3 BoardContainers with their own set of state;
        const numberOfBoardContainers = [1, 2, 3];
        const threeBoards = numberOfBoardContainers.map((ele, ind) => {
            return <div className="boards-container" key={'wrapBoardContainer' + ind}>
                <BoardContainer id={ind}
                    key={'BoardContainer' + ind} />
            </div>
        });
        return (
            <div>
                {threeBoards}
            </div>
        );
    };
};

