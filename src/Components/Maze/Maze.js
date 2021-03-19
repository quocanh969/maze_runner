import React, { Component } from 'react';
import Board from '../Board/Board';

export default class Maze extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mode: 1, // 0 - normal point,1 - Add start point, 2 - Add end point, 3 - Add obstacles, 4 - visited
            board: Array(100).fill(-1),
            start: -1,
            end: -1,
            obstacles: [],
        }

    }

    handleCellClick(index) {

        if(this.state.board[index] === this.state.mode) {
            this.state.board[index] = -1;
        } else {
            this.state.board[index] = this.state.mode;
        }
        
        this.state.obstacles.push(index);

        if(this.state.mode === 1) {
            // start point adding
            this.state.board[this.state.start] = 0;
            this.setState({
                start: index,
            })   
        } else if(this.state.mode === 2) {
            // start point adding
            this.state.board[this.state.end] = 0;
            this.setState({
                end: index,
            })
        } else {
            this.forceUpdate();
        }
    }
    handleChangeMode(newMode) {
        this.setState({
            mode: newMode,
        })
    }
    handleRestartClick() {
        this.setState({
            mode: 1, // 0 - normal point,1 - Add start point, 2 - Add end point, 3 - Add obstacles
            board: Array(100).fill(-1),
            start: -1,
            end: -1,
            obstacles: [],
        })
    }
    render() {
        const {mode} = this.state;
        return (
            <div>
                <div className='maze-runner-btn-group'>
                    <button onClick={() => {this.handleChangeMode(1)}}>Add start point</button>
                    <button onClick={() => {this.handleChangeMode(3)}}>Add obstacles</button>
                    <button onClick={() => {this.handleChangeMode(2)}}>Add end point</button>
                    <button onClick={() => {this.handleRestartClick()}}>Restart</button>
                    <button>Path finding start</button>
                </div>
                <div className='maze-runner-mode-label'>Mode: {mode === 1 ? 'Add start point' : (mode === 2 ? 'Add end point' : 'Add obstacle')}</div>
                <div className='maze-runner-grid'>
                    <Board board={this.state.board} handleCellClick={this.handleCellClick.bind(this)}></Board>
                </div>
            </div>
        )
    }
}
