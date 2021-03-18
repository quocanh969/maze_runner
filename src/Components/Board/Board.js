import React, { Component } from 'react'
import Cells from '../Cell/Cells';
import './Board.css';
import constant from '../../Constants/Config';

export default class Board extends Component {
    constructor(props) {
        super(props);
    }

    renderCell() {
        var content = [];
        for(let i = 0; i < constant.MAZE_RUNNER_ROW; i++) {
            var cells = [];
            for(let j = 0; j< constant.MAZE_RUNNER_COL; j++) {
                cells.push(
                    <Cells key={j+i*constant.MAZE_RUNNER_COL} handleCellClick={this.props.handleCellClick} index={j+i*constant.MAZE_RUNNER_COL} mode={this.props.board[i*constant.MAZE_RUNNER_COL+j]}></Cells>
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
