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