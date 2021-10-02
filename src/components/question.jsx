import React, { Component } from "react";
import Getquestions from "../Question&answers";
import MessageModal from "./MessageModal";
import ConfirmModal from "./ConfirmModal";
import Poll from "./poll";
import Optioncomponent from "./option";
import Lifelinecomponent from "./lifeline";
import kbcrotate from "../images/kbcrotate.png";
import Lose from "./Lost";
import Timer from "./Timer";
import "../App.css";
import "../styles/question.css";
import Congratulations from "./Congratulations";
import Celebrate from "./Confetti";

class Question extends Component {
	state = {
		questions: Getquestions(),
		qlev: this.props.qlevel,
		current: [
			"btn btn-warning",
			"btn btn-warning",
			"btn btn-warning",
			"btn btn-warning",
		],
		correct: ["", "", "", ""],
		presentQuestion: "",
		presentOptions: ["", "", "", ""],
		fiftyOption: 1,
		pollOption: 1,
		dialOption: 1,
		currenttime: 60,
		confirmDialog: false,
		messageDialog: false,
		poll: false,
		lifeline: "",
		presentLifeline: "",
		currentanswer: "",
		data: [],
		index: [0, 1, 2, 3],
		won: false,
		lose: false,
		stoptimer: false,
		stopwatch: 30,
	};
	closeConfirm = () => {
		var { confirmDialog, stoptimer } = this.state;
		confirmDialog = !confirmDialog;
		stoptimer = false;
		this.setState({ confirmDialog, stoptimer });
	};
	closeMessage = () => {
		var { messageDialog, poll, stoptimer } = this.state;
		messageDialog = false;
		poll = false;
		stoptimer = false;
		this.setState({ messageDialog, poll, stoptimer });
	};
	nextQuestion = async () => {
		var { qlev, correct, presentOptions, won, stopwatch, stoptimer } =
			this.state;
		stopwatch = 30;
		stoptimer = false;

		if (qlev !== 11) {
			await this.props.handlelvl();
			correct = ["", "", "", ""];
			presentOptions = ["", "", "", ""];

			await this.setState({
				qlev: this.props.qlevel,
				correct,
				presentOptions,
				stopwatch,
				stoptimer,
			});
		} else {
			won = true;
			await this.setState({ won });
		}
	};
	applyfifty = async () => {
		var {
			questions,
			qlev,
			presentOptions,
			fiftyOption,
			confirmDialog,
			stoptimer,
		} = this.state;
		confirmDialog = !confirmDialog;
		stoptimer = false;
		this.setState({ confirmDialog, stoptimer });
		var { options } = questions[qlev];
		var count = 2;
		for (var i = 0; i < 4; i++) {
			if (options[i] !== questions[qlev].answer && count > 0) {
				presentOptions[i] = " ";
				count--;
			}
		}
		fiftyOption = 0;
		await this.setState({ presentOptions, fiftyOption });
	};
	applyPoll = async () => {
		var {
			pollOption,
			confirmDialog,
			poll,
			questions,
			qlev,
			presentOptions,
			data,
		} = this.state;
		var { options, answer } = questions[qlev];
		var count = [0, 0, 0, 0];

		confirmDialog = !confirmDialog;
		this.setState({ confirmDialog });
		var remainingOptionCount = 0;
		for (var i = 0; i < 4; i++) {
			if (presentOptions[i] === "") remainingOptionCount++;
		}
		var colors = ["yellow", "green", "blue", "orange"];
		console.log(remainingOptionCount);

		if (remainingOptionCount === 4) {
			for (var i = 0; i < 33; i++) {
				var obj = {};
				obj.name = "";
				var arr = [];
				var opcount = 0;
				for (var j = 0; j < 4; j++) {
					var objsmall = {};
					if (options[j] !== answer) {
						objsmall.id = options[j];
						objsmall.label = options[j];
						if (opcount % 3 === i % 3) count[j] += 1;
						opcount++;
						objsmall.value = count[j];
					} else {
						objsmall.id = options[j];
						objsmall.label = options[j];

						count[j] += 2;
						objsmall.value = count[j];
					}
					objsmall.color = colors[j];

					arr.push(objsmall);
				}
				console.log("hello");

				obj.values = arr;
				data.push(obj);
			}
		} else {
			for (var i = 0; i < 33; i++) {
				var obj = {};
				obj.name = "";
				var arr = [];

				for (var j = 0; j < 4; j++) {
					if (options[j] !== answer && presentOptions[j] === "") {
						var objsmall = {};
						objsmall.id = options[j];
						objsmall.label = options[j];
						if (i % 2 === 0) count[j] += 1;

						objsmall.color = colors[j];
						objsmall.value = count[j];
						arr.push(objsmall);
					} else if (options[j] === answer) {
						var objsmall = {};
						objsmall.id = options[j];
						objsmall.label = options[j];
						if (i % 2 !== 0) count[j] += 2;
						else count[j] += 1;
						objsmall.color = colors[j];
						objsmall.value = count[j];
						arr.push(objsmall);
					}
				}
				console.log("hello");

				obj.values = arr;
				data.push(obj);
			}
		}
		poll = true;

		this.setState({ data, poll });

		pollOption = 0;
		this.setState({ pollOption });
	};
	applyPhone = async () => {
		var {
			dialOption,
			confirmDialog,
			questions,
			qlev,
			currentanswer,
			messageDialog,
		} = this.state;
		dialOption = 0;
		var currentanswer = questions[qlev].answer;

		confirmDialog = !confirmDialog;
		messageDialog = !messageDialog;
		this.setState({ currentanswer });

		this.setState({ dialOption, confirmDialog, messageDialog });
		return;
	};
	handlefifty = async () => {
		var { fiftyOption, confirmDialog, presentLifeline, lifeline, stoptimer } =
			this.state;
		if (fiftyOption === 0) return;
		presentLifeline = "applyfifty";
		lifeline = "50-50";
		stoptimer = true;
		this.setState({ stoptimer });
		this.setState({ presentLifeline, lifeline });
		confirmDialog = true;
		this.setState({ confirmDialog });
	};
	handlePoll = async () => {
		var { pollOption, confirmDialog, presentLifeline, lifeline, stoptimer } =
			this.state;
		if (pollOption === 0) return;
		presentLifeline = "applyPoll";
		lifeline = "Audience Poll";
		stoptimer = true;
		this.setState({ stoptimer });
		this.setState({ presentLifeline, lifeline });
		confirmDialog = true;
		this.setState({ confirmDialog });
	};
	handlePhone = async () => {
		var { dialOption, confirmDialog, presentLifeline, lifeline, stoptimer } =
			this.state;
		if (dialOption === 0) return;
		presentLifeline = "applyPhone";
		lifeline = "phone a friend";
		stoptimer = true;
		this.setState({ stoptimer });
		this.setState({ presentLifeline, lifeline });
		confirmDialog = true;
		this.setState({ confirmDialog });
	};
	handleLose = async () => {
		var { lose } = this.state;
		lose = true;
		this.setState({ lose });
	};

	handleOption = async (e) => {
		var { questions, qlev, correct, stoptimer } = this.state;
		var { options } = questions[qlev];
		stoptimer = true;
		this.setState({ stoptimer });

		if (e.target.value === questions[qlev].answer) {
			for (var i = 0; i < 4; i++) {
				if (options[i] === questions[qlev].answer) {
					correct[i] = "btn btn-success";
				}
			}
			this.setState(correct);

			await setTimeout(this.nextQuestion, 3000);
		} else {
			for (var i = 0; i < 4; i++) {
				if (options[i] === questions[qlev].answer) {
					correct[i] = "btn btn-success";
				}
				if (
					options[i] !== questions[qlev].answer &&
					e.target.value === options[i]
				) {
					correct[i] = "btn btn-danger";
				}
			}
			await this.setState({ correct });
			await setTimeout(this.handleLose, 3000);
		}
	};
	render() {
		const { questions, qlev, current, correct, presentOptions } = this.state;
		return (
			<div className="question">
				{this.state.poll && (
					<Poll
						options={questions[qlev].options}
						open={this.state.poll}
						close={this.closeMessage}
						data={this.state.data}
					/>
				)}
				{this.state.won && <Celebrate />}
				<Lose open={this.state.lose} />
				<Congratulations open={this.state.won} />
				<ConfirmModal
					open={this.state.confirmDialog}
					lifeline={this.state.lifeline}
					applyLifeline={this[this.state.presentLifeline]}
					close={this.closeConfirm}
				/>
				<MessageModal
					open={this.state.messageDialog}
					close={this.closeMessage}
					ans={this.state.currentanswer}
				/>
				<div className="lifeline">
					<Lifelinecomponent
						lifelineoption={this.state.fiftyOption}
						src={
							"https://www.pikpng.com/pngl/b/90-902801_50-50-black-and-white-clipart.png"
						}
						handlelifeline={this.handlefifty}
						imgheight="50px"
					/>
					<Lifelinecomponent
						lifelineoption={this.state.pollOption}
						src={
							"https://www.pngkey.com/png/full/235-2350076_gmw-host-clipart-library-people-icon-png-white.png"
						}
						handlelifeline={this.handlePoll}
						imgheight="80px"
					/>
					<Lifelinecomponent
						lifelineoption={this.state.dialOption}
						src={
							"https://www.nicepng.com/png/full/379-3794777_white-phone-icon-white-phone-call-icon.png"
						}
						handlelifeline={this.handlePhone}
						imgheight="80px"
					/>
				</div>
				{/* quetions and options */}
				<div className="currentquestion">
					<img src={kbcrotate} className="App-logo" alt="kbc" />
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignSelf: "center",
						}}
					>
						<Timer
							timecomplete={this.handleLose}
							stop={this.state.stoptimer}
							initialTime={this.state.stopwatch}
							level={this.props.qlevel}
						/>
						<button
							className="btn btn-primary btn-lg btn-block"
							style={{
								backgroundColor: "purple",
								border: "solid gold",
							}}
						>
							{questions[qlev].question}
						</button>
						<div className="optionbutton">
							{this.state.index.map((idx) => {
								return (
									<Optioncomponent
										key={idx}
										appliedclass={correct[idx] || current[idx]}
										optionvalue={questions[qlev].options[idx]}
										handleclick={this.handleOption}
										presentOption={presentOptions[idx]}
									/>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Question;
