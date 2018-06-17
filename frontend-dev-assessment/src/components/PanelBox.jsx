import React from 'react';
//React Bootstrap
import Panel from 'react-bootstrap/lib/Panel'

const PanelBox = (props) => {
    return (
        <Panel
            className={props.showContent ? 'panel-a' : 'panel-b'}
            onClick={() => props.togglePanelContent(props.id)}>
            <Panel.Body className='panel-text'>{props.showText}</Panel.Body>
        </Panel>
    )
}

export default PanelBox