import * as React from 'react';
import Cell from './Cell';

function GameGrid({ cols, gridFull, selectBox }) {
    const width = (cols * 14);
    let rowsArr = [];

    const initGrid = () => {
        let boxClass = "";

        rowsArr = gridFull.map((rowArr, rowIdx) =>
            rowArr.map((item, colIdx) => {
                const boxId = `${rowIdx}_${colIdx}`;
                boxClass = gridFull[rowIdx][colIdx] ? "box on" : "box off";

                return (
                    <Cell
                        boxClass={boxClass}
                        key={boxId}
                        boxId={boxId}
                        row={rowIdx}
                        col={colIdx}
                        selectBox={selectBox}
                    />
                );
            })
        );
    }

    initGrid();

    return (
        <div className="grid" style={{ width: width }}>
            {rowsArr}
        </div>
    );
}

export default GameGrid;