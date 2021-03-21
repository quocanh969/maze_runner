import React, { Component } from 'react';
import { connect } from 'react-redux';
import Board from '../Board/Board';

import constant from '../../Constants/Config';
import {restart, changeMode} from '../../Actions/index';
import dijkstra from '../../Algorithms/Dijkstra';

class MazeComponent extends Component {

    handleChangeMode(newMode) {
        const { onChangeMode } = this.props;
        onChangeMode(newMode);
    }
    handleRestartClick() {
        const { onRestartClick } = this.props;
        onRestartClick();
    }
    handlePathFinding() {
        const {board, start, end} = this.props;
        dijkstra(board, start, end);
    }
    render() {
        const {board, mode} = this.props;
        const {MODE} = constant
        return (
            <div>
                <div className='maze-runner-btn-group'>
                    <button onClick={() => {this.handleChangeMode(MODE.START)}}>Add start point</button>
                    <button onClick={() => {this.handleChangeMode(MODE.OBSTACLE)}}>Add obstacles</button>
                    <button onClick={() => {this.handleChangeMode(MODE.END)}}>Add end point</button>
                    <button onClick={() => {this.handleRestartClick()}}>Restart</button>
                    <button onClick={() => {this.handlePathFinding()}}>Path finding start</button>
                </div>
                <div className='maze-runner-mode-label'>Mode: {mode === 1 ? 'Add start point' : (mode === 2 ? 'Add end point' : 'Add obstacle')}</div>
                <div className='maze-runner-grid'>
                    <Board board={board}></Board>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state;
}

const mapDispatchToProps = dispatch => {
    return {
        onRestartClick: () => {
            dispatch(restart());
        },
        onChangeMode: newMode => {
            dispatch(changeMode(newMode));
        }
    }
}

const Maze = connect(
    mapStateToProps,
    mapDispatchToProps
)(MazeComponent);

export default Maze;