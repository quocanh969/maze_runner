import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Cells.css';
import { addStartPoint, addEndPoint, obstacleDown, obstacleEnter, obstacleUp } from '../../Actions/index';
import constant from '../../Constants/Config';

class CellsComponent extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        const { board, index } = this.props;
        const nextBoard = nextProps.board;
        if(board[index] !== nextBoard[index]) return true;
        return false;
    }

    handleClick() {
        const { mode, index, onAddEnd, onAddStart } = this.props;
        switch(mode) {
            case 1: {
                onAddStart(index);
                break;
            }
            case 2: {
                onAddEnd(index);
                break;
            }
            default: break;
        }

    }
    handleMouseDown() {
        const { mode, index, onObstacleDown } = this.props;
        if(mode === 3) {
            onObstacleDown(index);
        }
    }
    handleMouseEnter() {
        const { mode, isObstacle, index, onObstacleEnter } = this.props;
        if(mode === 3 && isObstacle) {
            onObstacleEnter(index);
        }
    }
    handleMouseUp() {
        const { mode, onObstacleUp } = this.props;
        if(mode === 3) {
            onObstacleUp();
        }
    }
    render() {
        const { board, index } = this.props;
        var modeClass = '';
        switch(board[index]) {
            case constant.MODE.NORMAL: {
                modeClass = '';
                break;
            }
            case constant.MODE.START: {
                modeClass = 'maze-runner-cell-start';
                break;
            }
            case constant.MODE.END: {
                modeClass = 'maze-runner-cell-end';
                break;
            }
            case constant.MODE.OBSTACLE: {
                modeClass = 'maze-runner-cell-obstacle';
                break;
            }
            case constant.MODE.VISITED: {
                modeClass = 'maze-runner-cell-visited';
                break;
            }
            default: break;
        }

        return (
            <div id={`cell-${index}`} className={`maze-runner-cell ${modeClass}`}
            onClick={this.handleClick} 
            onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp} onMouseEnter={this.handleMouseEnter}>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state;
}

const mapDispatchToProps = dispatch => {
    return {
        onAddStart: index => {
            dispatch(addStartPoint(index));
        },
        onAddEnd: index => {
            dispatch(addEndPoint(index));
        },
        onObstacleDown: index => {
            dispatch(obstacleDown(index));
        },
        onObstacleEnter: index => {
            dispatch(obstacleEnter(index));
        },
        onObstacleUp: () => {
            dispatch(obstacleUp());
        },
    }
}

const Cells = connect(
    mapStateToProps,
    mapDispatchToProps
)(CellsComponent);

export default Cells;