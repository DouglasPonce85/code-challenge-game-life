import * as React from 'react';
import { ButtonToolbar, MenuItem, DropdownButton } from 'react-bootstrap';
import { TopBarButtonsContainer, GameButton } from '../styles/styledComponent';

function TopBarButtons({ gameMode, gridSize }) {

	const handleSelect = (evt) => {
		gridSize(evt);
	}

	return (
		<TopBarButtonsContainer>
			<ButtonToolbar>
				<GameButton onClick={gameMode.playButton}>Play</GameButton>
				<GameButton onClick={gameMode.pauseButton}>Pause</GameButton>
				<GameButton onClick={gameMode.slow}>Slow</GameButton>
				<GameButton onClick={gameMode.fast}>Fast</GameButton>
				<GameButton onClick={gameMode.seed}>Seed</GameButton>

				<DropdownButton
					title="Grid Size"
					id="size-menu"
					onSelect={handleSelect}
				>
					<MenuItem eventKey="1">20x10</MenuItem>
					<MenuItem eventKey="2">50x30</MenuItem>
					<MenuItem eventKey="3">70x50</MenuItem>
				</DropdownButton>
			</ButtonToolbar>
		</TopBarButtonsContainer>
	)
}

export default TopBarButtons;