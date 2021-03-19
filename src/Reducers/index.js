const initState = {
    mode: 1, // 0 - normal point,1 - Add start point, 2 - Add end point, 3 - Add obstacles, 4 - visited
    board: Array(100).fill(-1),
    start: -1,
    end: -1,
    obstacles: [],
}

const rootReducer = (state = initState, action) => {
    switch(action.type) {
        case 'ADD_START_POINT': {
            return {
                ...state,
                start: action.start,
            }
        }
        case 'ADD_END_POINT': {
            return {
                ...state,
                end: action.end,
            }
        }
        default: return {...state};
    }
}

export default rootReducer;