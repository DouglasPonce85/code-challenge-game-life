import * as React from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import {
	TopBarButtonsContainer,
	GameButton,
	ModeButtons,
	SpeedButtons
} from '../styles/styledComponent';

function TopBarButtons({ gameMode }) {
	return (
		<TopBarButtonsContainer>
			<ModeButtons>
				<ButtonToolbar>
					<GameButton onClick={gameMode.play}>Play</GameButton>
					<GameButton onClick={gameMode.step}>Step</GameButton>
					<GameButton onClick={gameMode.pause}>Pause</GameButton>
					<GameButton onClick={gameMode.reset}>Reset</GameButton>
				</ButtonToolbar>
			</ModeButtons>

			<SpeedButtons>
				<GameButton onClick={gameMode.normal}>Normal</GameButton>
				<GameButton onClick={gameMode.slow}>Slow</GameButton>
				<GameButton onClick={gameMode.fast}>Fast</GameButton>
			</SpeedButtons>
		</TopBarButtonsContainer>
	)
}

export default TopBarButtons;