import React, { Component } from "react";
import Getquestions from "../Question&answers";
import MessageModal from "./MessageModal";
import ConfirmModal from "./ConfirmModal";
import Poll from "./poll";
import kbcrotate from "../images/kbcrotate.png";
import "../App.css";
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
		won: false,
	};
	closeConfirm = () => {
		var { confirmDialog } = this.state;
		confirmDialog = !confirmDialog;
		this.setState({ confirmDialog });
	};
	closeMessage = () => {
		var { messageDialog, poll } = this.state;
		messageDialog = false;
		poll = false;
		this.setState({ messageDialog, poll });
	};
	nextQuestion = async () => {
		var { qlev, correct, presentOptions, won } = this.state;

		if (qlev != 11) {
			await this.props.handlelvl();
			correct = ["", "", "", ""];
			presentOptions = ["", "", "", ""];

			await this.setState({ qlev: this.props.qlevel, correct, presentOptions });
		} else {
			won = true;
			await this.setState({ won });
		}
	};
	applyfifty = async () => {
		var { questions, qlev, presentOptions, fiftyOption, confirmDialog } =
			this.state;
		confirmDialog = !confirmDialog;
		this.setState({ confirmDialog });
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
		var { fiftyOption, confirmDialog, presentLifeline, lifeline } = this.state;
		if (fiftyOption === 0) return;
		presentLifeline = "applyfifty";
		lifeline = "50-50";
		this.setState({ presentLifeline, lifeline });
		confirmDialog = true;
		this.setState({ confirmDialog });
	};
	handlePoll = async () => {
		var { pollOption, confirmDialog, presentLifeline, lifeline } = this.state;
		if (pollOption === 0) return;
		presentLifeline = "applyPoll";
		lifeline = "Audience Poll";
		this.setState({ presentLifeline, lifeline });
		confirmDialog = true;
		this.setState({ confirmDialog });
	};
	handlePhone = async () => {
		var { dialOption, confirmDialog, presentLifeline, lifeline } = this.state;
		if (dialOption === 0) return;
		presentLifeline = "applyPhone";
		lifeline = "phone a friend";

		this.setState({ presentLifeline, lifeline });
		confirmDialog = true;
		this.setState({ confirmDialog });
	};

	handleOption = async (e) => {
		var { questions, qlev, correct } = this.state;
		var { options } = questions[qlev];

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
		}
	};
	render() {
		const { questions, qlev, current, correct, presentOptions } = this.state;
		return (
			<div
				style={{
					display: "flex",
					alignItems: "space-between",
					marginRight: "10%",
					marginBottom: "0.2%",
				}}
			>
				{this.state.poll && (
					<Poll
						options={questions[qlev].options}
						open={this.state.poll}
						close={this.closeMessage}
						data={this.state.data}
					/>
				)}
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
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-evenly",
						alignSelf: "center",
						alignContent: "flex-start",
						marginLeft: "5%",
					}}
				>
					<button
						style={{
							width: "150px",
							height: "100px",
							opacity: this.state.fiftyOption === 0 ? "0.5" : 1,
							marginBottom: "20px",
							borderRadius: "50% 50% 50% 50% / 49% 50% 50% 50%",
							backgroundColor: "purple",
							border: "3px solid gold",
						}}
						type="button"
						class="btn btn-primary "
						onClick={this.handlefifty}
					>
						<img
							style={{ height: "50px" }}
							src="https://www.pikpng.com/pngl/b/90-902801_50-50-black-and-white-clipart.png"
						/>
					</button>

					<button
						style={{
							width: "150px",
							height: "100px",
							marginBottom: "20px",
							opacity: this.state.pollOption === 0 ? "0.5" : 1,
							borderRadius: "50% 50% 50% 50% / 49% 50% 50% 50%",
							backgroundColor: "purple",
							border: "3px solid gold",
						}}
						type="button"
						class="btn btn-primary "
						onClick={this.handlePoll}
					>
						<img
							style={{ height: "80px" }}
							src="https://www.pngkey.com/png/full/235-2350076_gmw-host-clipart-library-people-icon-png-white.png"
						/>
					</button>
					<button
						style={{
							width: "150px",
							height: "100px",
							marginBottom: "20px",
							opacity: this.state.dialOption === 0 ? "0.5" : 1,
							borderRadius: "50% 50% 50% 50% / 49% 50% 50% 50%",
							backgroundColor: "purple",
							border: "3px solid gold",
						}}
						type="button"
						class="btn btn-primary "
						onClick={this.handlePhone}
					>
						<img
							style={{ height: "80px" }}
							src="https://www.nicepng.com/png/full/379-3794777_white-phone-icon-white-phone-call-icon.png"
						/>
					</button>
				</div>

				<div
					style={{
						display: "flex",
						flexDirection: "column",
						// justifyContent: "flex-end",

						// alignSelf: "flex-end",
						marginLeft: "20%",
						// marginRight: "10%",
					}}
				>
					<img src={kbcrotate} className="App-logo" alt="kbc" />
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignSelf: "flex-end",
						}}
					>
						<button
							style={{
								width: "800px",
								backgroundColor: "purple",
								border: "3px solid gold",
								marginTop: "3%",
							}}
							type="button"
							class="btn btn-primary btn-lg btn-block"
						>
							{questions[qlev].question}
						</button>
						<div
							style={{
								display: "flex",
								justifyContent: "space-between",
								marginBottom: "20px",
								marginTop: "10px",
							}}
						>
							<button
								style={{
									width: "350px",
									height: "40px",
									border: "3px solid gold",
								}}
								type="button"
								class={correct[0] || current[0]}
								value={questions[qlev].options[0]}
								onClick={this.handleOption}
							>
								{presentOptions[0] || questions[qlev].options[0]}
							</button>
							<button
								style={{
									width: "350px",
									height: "40px",
									border: "3px solid gold",
								}}
								type="button"
								class={correct[1] || current[1]}
								value={questions[qlev].options[1]}
								onClick={this.handleOption}
							>
								{presentOptions[1] || questions[qlev].options[1]}
							</button>
						</div>
						<div
							style={{
								display: "flex",
								justifyContent: "space-between",
								// marginBottom: "8px",
							}}
						>
							<button
								style={{
									width: "350px",
									height: "40px",
									border: "3px solid gold",
								}}
								type="button"
								class={correct[2] || current[2]}
								value={questions[qlev].options[2]}
								onClick={this.handleOption}
							>
								{presentOptions[2] || questions[qlev].options[2]}
							</button>
							<button
								style={{
									width: "350px",
									height: "40px",
									border: "3px solid gold",
								}}
								type="button"
								class={correct[3] || current[3]}
								value={questions[qlev].options[3]}
								onClick={this.handleOption}
							>
								{presentOptions[3] || questions[qlev].options[3]}
							</button>
						</div>
						/
					</div>
				</div>
			</div>
		);
	}
}

export default Question;
