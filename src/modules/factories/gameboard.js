const testInitBoard = () => {};
const resetBoard = () => Array(7).fill(Array(7).fill("empty"));
const spaceCheck = (board, length, position, direction) => {
	if (direction === "x") {
		for (let i = position[0]; i < position[0] + length; i++) {
			if (board[position[0]][i] === "hidden-ship" || i >= 7) {
				throw new Error("Ship doesn't fit in board.");
			}
		}
	} else if (direction === "y") {
		for (let i = position[1]; i < position[1] + length; i++) {
			if (board[i][position[1]] === "hidden-ship" || i >= 7) {
				throw new Error("Ship doesn't fit in board.");
			}
		}
	}
};
const parseArray = (array, target) => array.some(e => e === [a, b]);

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
				"hidden-ship",
				position[1],
				position[1] + length - 1
			);
		} else if (axis === "y") {
			for (let index = 0; index < this.board.length; index++) {
				this.board[index][position[1]] = "hidden-ship";
			}
		}
	}

	receiveAttack(a, b) {
		if (!Number.isInteger(a) || a >= 7 || a < 0)
			throw new Error(
				"The first argument is not a proper position coordinate."
			);
		if (!Number.isInteger(b) || b >= 7 || b < 0)
			throw new Error(
				"The second argument is not a proper position coordinate."
			);

		if (this.board[a][b] === "hidden-ship") {
			this.board[a][b] = "found-ship";
			this.ships.forEach(shipPresent => {
				const array = shipPresent.coordSet();
				if (parseArray(array, [a, b])) {
					
				}
			});
		}
	}
}

export { Board, testInitBoard };
