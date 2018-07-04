import * as React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';

import { gameSpeeds } from './constants/gameSpeeds';

import TopBarButtons from './components/TopBarButtons';
import GameGrid from './components/GameGrid';

class Main extends React.Component {
	constructor() {
		super();

		this.speed = gameSpeeds.NORMAL_SPEED;
		this.rows = 30;
		this.cols = 50;

		this.state = {
			generation: 0,
			gridFull: Array(this.rows)
				.fill()
				.map(() => Array(this.cols).fill(false))
		};
	}

	componentDidMount() {
		this.seedGrid();
		this.playButton();
	}

	selectCell = (row, col) => {
		let gridCopy = arrayClone(this.state.gridFull);
		gridCopy[row][col] = !gridCopy[row][col];

		this.setState({
			gridFull: gridCopy
		});
	};

	seedGrid = () => {
		let gridCopy = arrayClone(this.state.gridFull);

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

	playButton = () => {
		clearInterval(this.intervalId);
		this.intervalId = setInterval(this.play, this.speed);
	};

	pauseButton = () => {
		clearInterval(this.intervalId);
	};

	slow = () => {
		this.speed = gameSpeeds.SLOW_SPEED;
		this.playButton();
	};

	fast = () => {
		this.speed = gameSpeeds.FAST_SPEED;
		this.playButton();
	};

	clear = () => {
		const gridFull = Array(this.rows)
			.fill()
			.map(() => Array(this.cols).fill(false));

		this.setState(() => ({
			gridFull,
			generation: 0
		}));
	};

	gridSize = size => {
		switch (size) {
			case "1":
				this.cols = 20;
				this.rows = 10;
				break;
			case "2":
				this.cols = 50;
				this.rows = 30;
				break;
			default:
				this.cols = 70;
				this.rows = 50;
		}
		this.clear();
	};

	play = () => {
		let currentGrid = this.state.gridFull;
		let tmpGrid = arrayClone(this.state.gridFull);

		for (let i = 0; i < this.rows; i++) {
			for (let j = 0; j < this.cols; j++) {
				let count = 0;
				if (i > 0) if (currentGrid[i - 1][j]) count++;
				if (i > 0 && j > 0) if (currentGrid[i - 1][j - 1]) count++;
				if (i > 0 && j < this.cols - 1) if (currentGrid[i - 1][j + 1]) count++;
				if (j < this.cols - 1) if (currentGrid[i][j + 1]) count++;
				if (j > 0) if (currentGrid[i][j - 1]) count++;
				if (i < this.rows - 1) if (currentGrid[i + 1][j]) count++;
				if (i < this.rows - 1 && j > 0) if (currentGrid[i + 1][j - 1]) count++;
				if (i < this.rows - 1 && this.cols - 1) if (currentGrid[i + 1][j + 1]) count++;
				if (currentGrid[i][j] && (count < 2 || count > 3)) tmpGrid[i][j] = false;
				if (!currentGrid[i][j] && count === 3) tmpGrid[i][j] = true;
			}
		}

		this.setState(prevState => ({
			gridFull: tmpGrid,
			generation: prevState.generation + 1
		}));
	};

	render() {
		const buttonGameMode = {
			playButton: this.playButton,
			pauseButton: this.pauseButton,
			slow: this.slow,
			fast: this.fast,
			clear: this.clear,
			seed: this.seedGrid
		};

		return (
			<div>
				<h1>Code Challenge - "Game of Life"</h1>

				<TopBarButtons
					gameMode={buttonGameMode}
					gridSize={this.gridSize}
				/>
				<GameGrid
					gridFull={this.state.gridFull}
					rows={this.rows}
					cols={this.cols}
					selectBox={this.selectCell}
				/>
				<h2>Generations: {this.state.generation}</h2>
			</div>
		);
	}
}

function arrayClone(arr) {
	return JSON.parse(JSON.stringify(arr));
}

ReactDOM.render(<Main />, document.getElementById('root'));

