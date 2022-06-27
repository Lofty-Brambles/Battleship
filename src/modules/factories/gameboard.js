const testInitBoard = () => {};
const resetBoard = () => Array(7).fill(Array(7).fill(false));
const spaceCheck = (board, length, position, direction) => {
	if (direction === "x") {
		for (let i = position[0]; i < position[0] + length; i++) {
			if (board[position[0]][i] === true || i >= 7) {
				throw new Error("Ship doesn't fit in board.");
			}
		}
	} else if (direction === "y") {
		for (let i = position[1]; i < position[1] + length; i++) {
			if (board[i][position[1]] === true || i >= 7) {
				throw new Error("Ship doesn't fit in board.");
			}
		}
	}
};

class Board {
	constructor() {
		this.board = resetBoard();
		this.ships = [];
	}

	placeShip(ship) {
		const { length, position, axis } = ship;
		if (!this.ships.includes(ship)) {
			this.ships.push(ship);
		}
		spaceCheck(length, position, axis);
		if (axis === "x") {
			this.board[position[0]].fill(
				true,
				position[1],
				position[1] + length - 1
			);
		} else if (axis === "y") {
			for (let index = 0; index < this.board.length; index++) {
				this.board[index][position[1]] = true;
			}
		}
	}
}

export { Board, testInitBoard };
