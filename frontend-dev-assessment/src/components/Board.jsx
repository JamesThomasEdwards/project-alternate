import React from 'react';
//Files
import Header from './Header.jsx';
import PanelBox from './PanelBox.jsx';


const Board = (props) => {
    const panels = props.background.map((ele, ind) => {
        return <PanelBox
            id={ind} key={ind}
            showContent={ele[0]}
            showText={ele[1]}
            togglePanelContent={props.togglePanelContent} />
    })
    return (
        <div className='board-container'>
            <Header
                headerData={props.headerData}
                toggleHeaderContent={props.toggleHeaderContent}
                headerDisplay={props.headerDisplay} />
            <div className='panel-container'>
                {panels}
            </div>
        </div>
    )
}

export default Board