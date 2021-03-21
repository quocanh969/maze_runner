import React, { Component } from 'react'
import Cells from '../Cell/Cells';
import './Board.css';
import constant from '../../Constants/Config';

import { connect } from 'react-redux';

class BoardComponent extends Component {
    renderCell() {
        var content = [];
        for(let i = 0; i < constant.MAZE_RUNNER_ROW; i++) {
            var cells = [];
            for(let j = 0; j< constant.MAZE_RUNNER_COL; j++) {
                cells.push(
                    <Cells key={j+i*constant.MAZE_RUNNER_COL} index={j+i*constant.MAZE_RUNNER_COL}></Cells>
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

const mapStateToProps = state => {
    return state;
}

const mapDispatchToProps = dispatch => {
    return {}
}

const Board = connect(
    mapStateToProps,
    mapDispatchToProps
)(BoardComponent);

export default Board;