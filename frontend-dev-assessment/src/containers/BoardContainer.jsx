// React;
import React from 'react';
import { Component } from 'react';
// Files;
import Board from '../components/Board.jsx';
import boardContentJSONString from '../../boardContentJSONString';

export default class BoardContainer extends Component {
    state = {
        headerContent: [],
        showHidePanelContent: [[true, null], [false, null]],
        showHideHeaderContent: true,
        boardContent: null
    };
    // toggles panel content, showing text/ background lightend on one;
    // and darkend background with no text on the other;
    togglePanelContent = (id) => {
        let boardContent = this.state.boardContent;
        if (id === 1) {
            this.setState(() => ({
                showHidePanelContent: [[false, null], [true, boardContent.contentB]]
            }));
        } else {
            this.setState(() => ({
                showHidePanelContent: [[true, boardContent.contentA], [false, null]]
            }));
        };
    };
    // toggles header content;
    // press on the '-' to hide content and change '-' to '+'; 
    // '+' to show content and change back to '-'
    toggleHeaderContent = () => {
        let boardContent = this.state.boardContent;
        if (this.state.showHideHeaderContent) {
            this.setState(() => ({
                headerContent: [],
                showHideHeaderContent: false
            }));
        } else {
            this.setState(() => ({
                headerContent: boardContent.headerData,
                showHideHeaderContent: true
            }));
        };
    };
    // takes in the JSON string, parse it, and updates the state;
    componentDidMount() {
        let boardContent = JSON.parse(boardContentJSONString);
        this.setState(() => ({
            headerContent: boardContent.headerData,
            showHidePanelContent: [[true, boardContent.contentA], [false, null]],
            boardContent
        }));
    }
    render() {
        return (
            <div>
                <Board
                    headerData={this.state.headerContent}
                    toggleHeaderContent={this.toggleHeaderContent}
                    showHideHeaderContent={this.state.showHideHeaderContent}
                    showHidePanelContent={this.state.showHidePanelContent}
                    togglePanelContent={this.togglePanelContent} />
            </div>
        );
    };
};
