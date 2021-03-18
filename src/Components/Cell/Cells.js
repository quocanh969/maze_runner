import React, { Component } from 'react';
import './Cells.css';

export default class Cells extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.handleCellClick(this.props.index);
    }
    render() {
        var modeClass = '';
        switch(this.props.mode) {
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
