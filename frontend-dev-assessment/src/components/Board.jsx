//React
import React from 'react';
//Files
import Header from './Header.jsx';
import PanelBox from './PanelBox.jsx';


const Board = (props) => {
    // creates 2 panels based on state => background
    const panels = props.background.map((ele, ind) => {
        return <PanelBox
            id={ind} key={ind}
            showContent={ele[0]}
            showText={ele[1]}
            togglePanelContent={props.togglePanelContent} />
    })
    console.log(props)
    return (
        <div className='board-container'>
            <Header
                // headerData={props.headerData}
                headerDataOne={props.headerData[0]}
                headerDataTwo={props.headerData[1]}
                headerDataThree={props.headerData[2]}
                toggleHeaderContent={props.toggleHeaderContent}
                headerDisplay={props.headerDisplay} />
            <div className='panel-container'>
                {panels}
            </div>
        </div>
    )
}

export default Board