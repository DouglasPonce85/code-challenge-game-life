import * as React from 'react';
import { ButtonToolbar, MenuItem, DropdownButton } from 'react-bootstrap';

function TopBarButtons({ gameMode, gridSize }) {

	const handleSelect = (evt) => {
		gridSize(evt);
	}

	return (
		<div className="center">
			<ButtonToolbar>
				<button className="btn btn-default" onClick={gameMode.playButton}>
					Play
				</button>
				<button className="btn btn-default" onClick={gameMode.pauseButton}>
					Pause
				</button>
				<button className="btn btn-default" onClick={gameMode.slow}>
					Slow
				</button>
				<button className="btn btn-default" onClick={gameMode.fast}>
					Fast
				</button>
				<button className="btn btn-default" onClick={gameMode.seed}>
					Seed
				</button>

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
		</div>
	)
}

export default TopBarButtons;