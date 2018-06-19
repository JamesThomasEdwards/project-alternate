// React;
import React from 'react';
// Files;
import Header from './Header.jsx';
import PanelBox from './PanelBox.jsx';
// Props;
import PropTypes from 'prop-types';

const propTypes = {
    toggleHeaderContent: PropTypes.func,
    showHideHeaderContent: PropTypes.bool,
    togglePanelContent: PropTypes.func,
    showHidePanelContent: PropTypes.array,
    headerData: PropTypes.array
};


const Board = (props) => {
    // creates 2 panels based on state => panelContent
    const panels = props.showHidePanelContent.map((ele, ind) => {
        return <PanelBox
            id={ind} key={'PanelBox' + ind}
            showContent={ele[0]}
            showText={ele[1]}
            togglePanelContent={props.togglePanelContent} />
    });
    return (
        <div className="board-container">
            <Header
                headerDataOne={props.headerData[0]}
                headerDataTwo={props.headerData[1]}
                headerDataThree={props.headerData[2]}
                toggleHeaderContent={props.toggleHeaderContent}
                showHideHeaderContent={props.showHideHeaderContent} />
            <div className="panel-container">
                {panels}
            </div>
        </div>
    );
};

Board.propTypes = propTypes;

export default Board;