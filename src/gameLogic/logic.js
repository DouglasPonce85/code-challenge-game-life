export const arrayClone = (arr) => {
    return JSON.parse(JSON.stringify(arr));
}

export const getNeighboursCount = (currentGrid, indexInfo, gridInfo) => {
    const { row, col } = indexInfo;
    const { numRows, numCols } = gridInfo;
    let neighbours = 0;

    // previous row, current column
    if ((row > 0) && (currentGrid[row - 1][col])) {
        neighbours++;
    }

    // previous row, previous column
    if ((row > 0) && (col > 0) && (currentGrid[row - 1][col - 1])) {
        neighbours++;
    }

    // previous row, next column
    if ((row > 0) && (col < numCols - 1) && (currentGrid[row - 1][col + 1])) {
        neighbours++;
    }

    // current row, next column
    if ((col < numCols - 1) && (currentGrid[row][col + 1])) {
        neighbours++;
    }

    // current row, previous column
    if ((col > 0) && (currentGrid[row][col - 1])) {
        neighbours++;
    }

    // next row, current column
    if ((row < numRows - 1) && (currentGrid[row + 1][col])) {
        neighbours++;
    }

    // next row, previous column
    if ((row < numRows - 1) && (col > 0) && (currentGrid[row + 1][col - 1])) {
        neighbours++;
    }

    // next row, next column
    if ((row < numRows - 1) && (col < numCols - 1) && (currentGrid[row + 1][col + 1])) {
        neighbours++;
    }

    return neighbours;
}

export const evaluateGrid = (currentGrid, numRows, numCols) => {
    let tmpGrid = arrayClone(currentGrid);

    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            let neighbours = getNeighboursCount(currentGrid, { row, col }, { numRows, numCols });

            if ((currentGrid[row][col]) && (neighbours < 2 || neighbours > 3)) {
                tmpGrid[row][col] = false;
            }

            if ((!currentGrid[row][col]) && (neighbours === 3)) {
                tmpGrid[row][col] = true;
            }
        }
    }

    return tmpGrid;
}

export const IsGridWithCellsAlive = (currentGrid, numRows, numCols) => {
    let foundCellAlive = false;
    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            if (currentGrid[row][col]) {
                foundCellAlive = true;
            }
        }
    }
    return foundCellAlive;
}