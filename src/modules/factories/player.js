import { Board } from "./gameboard";

export default class Player {
	constructor(name, turn, type) {
		this.name = name ?? "User";
		this.turn = turn ?? false;
		this.type = type ?? "Player";
		this.boardset = new Board;
	}

	toggleTurn() {
		this.turn = !this.turn;
	}

	attackReceived(i, j) {
		if (!this.turn) throw new Error("Wrong player turn.");
		if (this.type !== "Player") throw new Error("Non human Player.");
		const marked = this.boardset.receiveAttack(i, j);
		return marked;
	}
}