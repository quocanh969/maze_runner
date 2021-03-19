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