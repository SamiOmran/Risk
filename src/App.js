import React from 'react';
import Grid from './Component/Grid';
import QuestionScreen from './Component/QuestionScreen';
import TimeUpScreen from './Component/TimeUpScreen';

import './App.css';
import 'primereact/resources/themes/soho-light/theme.css';

class App extends React.Component {
	state = {
		gridData: this.initializeGridData(),
		currentQuestion: null,
		showQuestionScreen: false,
		showTimeUpScreen: false,
	};

	initializeGridData() {
		// Initialize your grid data with categories and values
		const data = require('./data/Sufraa2_Questions.json');

		return data;
	}

	onCellClick = (category, value, question, options) => {
		this.setState({
			currentQuestion: { category, value, question, options },
			showQuestionScreen: true,
		});
	};

	onTimerEnd = () => {
		const updatedGridData = this.markCellAsAnswered(
			this.state.gridData,
			this.state.currentQuestion
		);

		this.setState({
			gridData: updatedGridData,
			showQuestionScreen: false,
			showTimeUpScreen: true,
			//////////////////////
			//    currentQuestion: null // Set currentQuestion to null after updating the grid
		});
	};

	returnToGrid = () => {
		this.setState({
			currentQuestion: null,
			showTimeUpScreen: false,
		});
	};
	markCellAsAnswered(gridData, question) {
		const updatedGridData = { ...gridData };
		updatedGridData[question.category] = updatedGridData[question.category].map(
			(cell) => {
				if (cell.value === question.value) {
					return { ...cell, isAnswered: true };
				}
				return cell;
			}
		);
		return updatedGridData;
	}

	render() {
		const { gridData, showQuestionScreen, currentQuestion, showTimeUpScreen } =
			this.state;

		return (
			<div className="App">
				{showQuestionScreen && currentQuestion ? (
					<QuestionScreen
						question={currentQuestion}
						onTimeEnd={this.onTimerEnd}
					/>
				) : showTimeUpScreen ? (
					<TimeUpScreen onReturnToGrid={this.returnToGrid} />
				) : (
					<>
						<h1 id="title">Risk - المخاطرة</h1>
						<Grid gridData={gridData} onCellClick={this.onCellClick} />
					</>
				)}
			</div>
		);
	}
}

export default App;
