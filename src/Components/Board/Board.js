import React, { Component } from 'react'
import Cells from '../Cell/Cells';
import './Board.css';

export default class Board extends Component {
    renderCell() {
        var content = [];
        for(let i = 0; i < 10; i++) {
            var cells = [];
            for(let j = 0; j< 20; j++) {
                cells.push(
                    <Cells key={(j+1)*i+(j+1)}></Cells>
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
