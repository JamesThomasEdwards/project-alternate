import React from 'react';
import { Component } from 'react';
//Files
import Board from '../components/Board.jsx'
import data from '../../data.js';


export default class BoardContainer extends Component {
    state = {
        headerContent: [],
        background: [[true, null], [false, null]],
        headerDisplay: true,
        boardContent: null
    }
    //Toggles panel content
    togglePanelContent = (id) => {
        let boardContent = this.state.boardContent
        if (id === 1) {
            this.setState(() => ({ background: [[false, null], [true, boardContent.contentB]] }))
        } else {
            this.setState(() => ({ background: [[true, boardContent.contentA], [false, null]] }))
        }
    }
    //Toggles header content
    toggleHeaderContent = () => {
        let boardContent = this.state.boardContent
        if (this.state.headerDisplay) {
            this.setState(() => ({
                headerContent: [],
                headerDisplay: false
            }))
        } else {
            this.setState(() => ({
                headerContent: boardContent.headerData,
                headerDisplay: true
            }))
        }
    }
    //takes in the JSON string, parse it, and updates the state
    componentDidMount() {
        let boardContent = JSON.parse(data)
        this.setState(() => ({
            headerContent: boardContent.headerData,
            background: [[true, boardContent.contentA], [false, null]],
            boardContent
        }))
    }
    render() {
        return (
            <div>
                <Board
                    headerData={this.state.headerContent}
                    toggleHeaderContent={this.toggleHeaderContent}
                    headerDisplay={this.state.headerDisplay}
                    background={this.state.background}
                    togglePanelContent={this.togglePanelContent}
                />
            </div>
        )
    }
}