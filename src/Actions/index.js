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

export const obstacleDown = index => {
    return {
        type: 'OBSTACLE_DOWN',
        index,
    }
}

export const obstacleEnter = index => {
    return {
        type: 'OBSTACLE_ENTER',
        index,
    }
}

export const obstacleUp = index => {
    return {
        type: 'OBSTACLE_UP',
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