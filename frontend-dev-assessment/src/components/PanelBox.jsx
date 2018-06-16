import React from 'react';
//React Bootstrap
import Panel from 'react-bootstrap/lib/Panel'

const PanelBox = (props) => {
    return (
        <Panel className={props.showContent ? 'panelA' : 'panelB'} onClick={() => props.togglePanelContent(props.id)}>
            <Panel.Body>{props.showText}</Panel.Body>
        </Panel>
    )
}

export default PanelBox