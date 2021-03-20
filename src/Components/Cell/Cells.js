import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Cells.css';
import { addStartPoint, addEndPoint, addObstacle } from '../../Actions/index';

class CellsComponent extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        const { board, index } = this.props;
        const nextBoard = nextProps.board;
        if(board[index] !== nextBoard[index]) return true;
        return false;
    }

    handleClick() {
        const { mode, index, onAddEnd, onAddStart, onAddObstacle } = this.props;
        switch(mode) {
            case 1: {
                onAddStart(index);
                break;
            }
            case 2: {
                onAddEnd(index);
                break;
            }
            case 3: {
                onAddObstacle(index);
                break;
            }
            default: break;
        }

    }
    render() {
        const { board, index } = this.props;
        var modeClass = '';
        switch(board[index]) {
            case 0: {
                modeClass = '';
                break;
            }
            case 1: {
                modeClass = 'maze-runner-cell-start';
                break;
            }
            case 2: {
                modeClass = 'maze-runner-cell-end';
                break;
            }
            case 3: {
                modeClass = 'maze-runner-cell-obstacle';
                break;
            }
            default: break;
        }

        return (
            <div className={`maze-runner-cell ${modeClass}`} onClick={this.handleClick}>
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
        onAddObstacle: index => {
            dispatch(addObstacle(index));
        }
    }
}

const Cells = connect(
    mapStateToProps,
    mapDispatchToProps
)(CellsComponent);

export default Cells;