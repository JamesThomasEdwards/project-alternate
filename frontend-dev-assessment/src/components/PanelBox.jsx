import React from 'react';
// React Bootstrap
import Panel from 'react-bootstrap/lib/Panel';
// Props;
import PropTypes from 'prop-types';

const propTypes = {
    showContent: PropTypes.bool,
    togglePanelContent: PropTypes.func,
    id: PropTypes.number,
    showText: PropTypes.string
};

const PanelBox = (props) => {
    // props.togglePanelContent toggles panel A from;
    // have text (shown by props.showText)/ light background and panel B to have a darkened background;
    // to panel A with darkend background and panel B to have text;
    // it takes in props.id that's given as an index when rendered. This checks that; 
    // id to see if it is true or false in showHidePanelContent;
    return (
        <Panel
            className={props.showContent ? 'panel-show-content' : 'panel-hide-content'}
            onClick={() => props.togglePanelContent(props.id)}>
            <Panel.Body className="panel-container__panel-text">
                {props.showText}
            </Panel.Body>
        </Panel>
    );
};

PanelBox.propTypes = propTypes;

export default PanelBox;