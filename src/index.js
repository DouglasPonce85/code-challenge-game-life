import * as React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';

import * as logic from './gameLogic/logic';
import { gameSpeeds } from './constants/gameSpeeds';
import { seederModes } from './constants/seederModes';
import { gameStatus } from './constants/gameStatus';
import {
	GameInfo,
	GameLabel,
	GameContainer,
	GenerationLabel,
	GameStatusLabel,
	GameLabels,
	TitleLabel
} from './styles/styledComponent';

import TopBarButtons from './components/TopBarButtons';
import GameGrid from './components/GameGrid';
import SideOptions from './components/SideOptions';

class Main extends React.Component {
	constructor() {
		super();

		this.rows = 50;
		this.cols = 50;
		this.speed = gameSpeeds.NORMAL_SPEED;
		this.seederMode = seederModes.DEFAULT;
		this.currentGameStatus = gameStatus.DRAFT;

		this.state = {
			generation: 0,
			gridFull: Array(this.rows)
				.fill()
				.map(() => Array(this.cols).fill(false)),
			gameOfLife: true
		};
	}

	componentDidMount() {
		this.initSeedGrid();
	}

	playButton = () => {
		clearInterval(this.intervalId);
		this.intervalId = setInterval(this.play, this.speed);
	};

	stepButton = () => {
		clearInterval(this.intervalId);
		this.play();
	};

	pauseButton = () => {
		clearInterval(this.intervalId);

		this.currentGameStatus = gameStatus.PAUSED;
	};

	slowButton = () => {
		this.speed = gameSpeeds.SLOW_SPEED;
		this.playButton();
	};

	normalButton = () => {
		this.speed = gameSpeeds.NORMAL_SPEED;
		this.playButton();
	};

	resetButton = () => {
		this.clearGrid();
		this.initSeedGrid();

		this.currentGameStatus = gameStatus.DRAFT;
	}

	fastButton = () => {
		this.speed = gameSpeeds.FAST_SPEED;
		this.playButton();
	};

	initSeedGrid = () => {
		if (this.seederMode === seederModes.DEFAULT) {
			this.defaultSeedGrid();
		} else {
			this.randomSeedGrid();
		}
	}

	defaultSeedGrid = () => {
		let gridCopy = logic.arrayClone(this.state.gridFull);
		gridCopy[0][0] = true;
		gridCopy[0][1] = true;
		gridCopy[1][0] = true;
		gridCopy[1][3] = true;
		gridCopy[2][1] = true;
		gridCopy[2][2] = true;

		this.setState({
			gridFull: gridCopy
		});
	}

	randomSeedGrid = () => {
		let gridCopy = logic.arrayClone(this.state.gridFull);
		for (let rowIndex = 0; rowIndex < this.rows; rowIndex++) {
			for (let columnIndex = 0; columnIndex < this.cols; columnIndex++) {
				if (Math.floor(Math.random() * 4) === 1) {
					gridCopy[rowIndex][columnIndex] = true;
				}
			}
		}

		this.setState({
			gridFull: gridCopy
		});
	};

	clearGrid = () => {
		let tmpGrid = Array(this.rows)
			.fill()
			.map(() => Array(this.cols).fill(false));

		this.state = {
			generation: 0,
			gridFull: tmpGrid,
			gameOfLife: true
		};
	};

	handleGridSize = (size) => {
		switch (size) {
			case "1":
				this.cols = 10;
				this.rows = 20;
				break;

			case "2":
				this.cols = 20;
				this.rows = 30;
				break;

			default:
				this.cols = 50;
				this.rows = 50;
		}

		this.clearGrid();
		this.initSeedGrid();

		this.currentGameStatus = gameStatus.DRAFT;
	};

	handleSeederMode = (seederOption) => {
		switch (seederOption) {
			case "1":
				this.seederMode = seederModes.DEFAULT;
				break;

			default:
				this.seederMode = seederModes.RANDOM;
				break;
		}

		this.clearGrid();
		this.initSeedGrid();
	};

	selectCell = (row, col) => {
		this.currentGameStatus = gameStatus.PLAYING;

		clearInterval(this.intervalId);
		let gridCopy = logic.arrayClone(this.state.gridFull);
		gridCopy[row][col] = !gridCopy[row][col];

		this.setState({
			gridFull: gridCopy
		}, this.play());
	};

	play = () => {
		if (this.currentGameStatus === gameStatus.DEAD) {
			this.setState({ gameOfLife: false });
			return;
		}

		const tmpGrid = logic.evaluateGrid(this.state.gridFull, this.rows, this.cols);
		this.setState(prevState => ({
			gridFull: tmpGrid,
			generation: prevState.generation + 1
		}));

		this.currentGameStatus =
			logic.IsGridWithCellsAlive(this.state.gridFull, this.rows, this.cols) ?
				gameStatus.PLAYING : gameStatus.DEAD;

	};

	getGameModes = () => {
		return {
			play: this.playButton,
			step: this.stepButton,
			pause: this.pauseButton,
			normal: this.normalButton,
			reset: this.resetButton,
			slow: this.slowButton,
			fast: this.fastButton,
			clear: this.clearGrid,
			seed: this.seedGrid
		};
	}

	getGameStatus = () => {
		let status = '';
		switch (this.currentGameStatus) {
			case gameStatus.DRAFT:
				status = 'Draft';
				break;

			case gameStatus.DEAD:
				status = 'Finished';
				break;

			case gameStatus.PAUSED:
				status = 'Paused';
				break;

			default:
				status = 'Playing';
				break;
		}
		return status;
	}

	render() {
		return (
			<div>
				<GameLabel>Code Challenge - "Game of Life"</GameLabel>

				<TopBarButtons
					gameMode={this.getGameModes()}
				/>

				<GameContainer>
					<GameInfo>
						<SideOptions
							gridSize={this.handleGridSize}
							seederMode={this.handleSeederMode}
						/>
						<GameLabels>
							<GenerationLabel>
								<TitleLabel> Generations: </TitleLabel>
								<span>{this.state.generation} </span>
							</GenerationLabel>
							<GameStatusLabel>
								<TitleLabel> Game Status: </TitleLabel>
								<span> {this.getGameStatus()} </span>
							</GameStatusLabel>
						</GameLabels>
					</GameInfo>

					<GameGrid
						gridFull={this.state.gridFull}
						rows={this.rows}
						cols={this.cols}
						selectBox={this.selectCell}
					/>
				</GameContainer>
			</div>
		);
	}
}

ReactDOM.render(<Main />, document.getElementById('root'));

