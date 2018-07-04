import * as React from 'react';

function Cell({ id, row, col, selectBox, boxClass }) {
    const boxSelection = () => {
        selectBox(row, col);
    }

    return (
        <div
            className={boxClass}
            id={id}
            onClick={boxSelection}
        />
    );
}

export default Cell;