import constant from "../Constants/Config";

function dijkstra(board, startIndex, endIndex) {
    const visitedNoteInOrder = [];
    const unvisitedNodes = mapBoardToNodeArray(board);
    const grid = [...unvisitedNodes];
    unvisitedNodes[startIndex].distance = 0;
    while (!!unvisitedNodes.length) {
        sortBoardByDistance(unvisitedNodes);
        const closestNode = unvisitedNodes.shift();

        // wall
        if (closestNode.value === constant.MODE.OBSTACLE) continue;

        if (closestNode.distance === Infinity) return visitedNoteInOrder;
        closestNode.value = constant.MODE.VISITED;
        visitedNoteInOrder.push(closestNode);

        if (closestNode.index === endIndex) return visitedNoteInOrder;
        updateUnvisitedNeighbor(closestNode, grid);
    }
}

function sortBoardByDistance(unvisitedNodes) {
    unvisitedNodes.sort((a, b) => {
        return a.distance - b.distance;
    })
}

function mapBoardToNodeArray(board) {
    const unvisitedNode = [];
    board.forEach((e, index) => {
        unvisitedNode.push({
            index,
            row: Math.trunc(index / constant.MAZE_RUNNER_COL),
            col: Math.trunc(index % constant.MAZE_RUNNER_COL),
            value: e,
            distance: Infinity,
            previousNode: null,
        })
    })
    return unvisitedNode;
}

function updateUnvisitedNeighbor(node, grid) {
    const unvisitedNeighbors = getUnvisitedNeighbor(node, grid);
    unvisitedNeighbors.forEach(e => {
        e.distance = node.distance + 1;
        e.previousNode = node;
    })
}

function getUnvisitedNeighbor(node, grid) {
    const neighbors = [];
    const { col, row } = node;
    if (row > 0) neighbors.push(grid[(row - 1)*constant.MAZE_RUNNER_COL + col]);
    if (row < constant.MAZE_RUNNER_ROW - 1) neighbors.push(grid[(row + 1)*constant.MAZE_RUNNER_COL + col]);
    if (col > 0) neighbors.push(grid[row*constant.MAZE_RUNNER_COL + (col - 1)]);
    if (col < constant.MAZE_RUNNER_COL - 1) neighbors.push(grid[row*constant.MAZE_RUNNER_COL + (col + 1)]);
    return neighbors.filter(neighbor => neighbor.value !== constant.MODE.VISITED);
}

export default dijkstra;