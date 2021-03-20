export const addStartPoint = index => {
    return {
        type: 'ADD_START_POINT',
        start: index,
    }
}

export const addEndPoint = index => {
    return {
        type: 'ADD_END_POINT',
        end: index,
    }
}

export const addObstacle = index => {
    return {
        type: 'ADD_OBSTACLE_POINT',
        index,
    }
}

export const restart = () => {
    return {
        type: 'RESTART'
    }
}

export const changeMode = newMode => {
    return {
        type: 'CHANGE_MODE',
        mode: newMode,
    }
}