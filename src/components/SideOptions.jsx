import * as React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import { SideOptionsContainer } from '../styles/styledComponent';

function SideOptions({ gridSize, seederMode }) {
    const handleGridSize = (evt) => {
        gridSize(evt);
    }

    const handleSeederMode = (evt) => {
        seederMode(evt);
    }

    return (
        <SideOptionsContainer>
            <DropdownButton
                title="Seeder Mode"
                id="seeder-mode"
                onSelect={handleSeederMode}
            >
                <MenuItem eventKey="1">Default</MenuItem>
                <MenuItem eventKey="2">Random</MenuItem>
            </DropdownButton>

            <DropdownButton
                title="Grid Size"
                id="size-menu"
                onSelect={handleGridSize}
            >
                <MenuItem eventKey="1">20x10</MenuItem>
                <MenuItem eventKey="2">30x20</MenuItem>
                <MenuItem eventKey="3">50x50</MenuItem>
            </DropdownButton>
        </SideOptionsContainer>
    );
}

export default SideOptions;