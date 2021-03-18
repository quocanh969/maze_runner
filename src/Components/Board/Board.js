import React, { Component } from 'react'
import Cells from '../Cell/Cells';
import './Board.css';

export default class Board extends Component {
    constructor(props) {
        super(props);
    }

    renderCell() {
        var content = [];
        for(let i = 0; i < 10; i++) {
            var cells = [];
            for(let j = 0; j< 10; j++) {
                cells.push(
                    <Cells key={j+i*10} handleCellClick={this.props.handleCellClick} index={j+i*10} mode={this.props.board[i*10+j]}></Cells>
                )
            }
            content.push(
                <div key={i} className='maze-runner-row'>
                    {cells}
                </div>
            );
        }
        return content;
    }
    render() {
        return (
            <div>
                {this.renderCell()}
            </div>
        )
    }
}
