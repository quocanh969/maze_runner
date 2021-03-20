import constant from "../Constants/Config";
const {MAZE_RUNNER_COL, MAZE_RUNNER_ROW, MODE} = constant;
const initState = {
    mode: MODE.START, // 0 - normal point,1 - Add start point, 2 - Add end point, 3 - Add obstacles, 4 - visited
    board: Array(MAZE_RUNNER_ROW*MAZE_RUNNER_COL).fill(MODE.NORMAL),
    start: -1,
    end: -1,
    obstacles: [],
}

const rootReducer = (state = initState, action) => {
    switch(action.type) {
        case 'ADD_START_POINT': {
            const temp = [...state.board];
            temp[action.start] = MODE.START;
            if(state.start !== -1) {
                temp[state.start] = MODE.NORMAL;
            }
            return {
                ...state,
                start: action.start,
                board: temp,
            }
        }
        case 'ADD_END_POINT': {
            const temp = [...state.board];
            temp[action.end] = MODE.END;
            if(state.end !== -1) {
                temp[state.end] = MODE.NORMAL;
            }
            return {
                ...state,
                end: action.end,
                board: temp,
            }
        }
        case 'ADD_OBSTACLE_POINT': {
            const temp = [...state.board];
            if(temp[action.index] === MODE.OBSTACLE) {
                temp[action.index] = MODE.NORMAL;
            } else {
                temp[action.index] = MODE.OBSTACLE;
            }
            state.obstacles.push(action.index);
            return {
                ...state,
                board: temp,
            }
        }
        case 'CHANGE_MODE': {
            return {
                ...state,
                mode: action.mode,
            }
        }
        case 'RESTART': {
            return {
                ...initState,
            }
        }
        default: return {...state};
    }
}

export default rootReducer;