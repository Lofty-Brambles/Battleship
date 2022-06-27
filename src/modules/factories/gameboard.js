import generateBoard from "../util/boardgen";

const testInitBoard = () => {};
const spaceCheck = (board, length, position, direction) => {
	if (direction === "x") {
		for (let i = position[1]; i < position[1] + length; i++) {
			if (board[position[0]][i] === "hidden-ship" || i >= 7) {
				throw new Error("Ship doesn't fit in board.");
			}
		}
	} else if (direction === "y") {
		for (let i = position[0]; i < position[0] + length; i++) {
			if (board[i][position[1]] === "hidden-ship" || i >= 7) {
				throw new Error("Ship doesn't fit in board.");
			}
		}
	}
};
const parseArray = (array, target) =>
	array.findIndex(val => JSON.stringify(target) === JSON.stringify(val));

class Board {
	constructor() {
		this.board = generateBoard();
		this.ships = [];
	}

	placeShip(ship) {
		const { length, position, axis } = ship;
		spaceCheck(this.board, length, position, axis);
		if (!this.ships.includes(ship)) {
			this.ships.push(ship);
		}
		if (axis === "x") {
			for (
				let index = position[1];
				index < position[1] + length;
				index++
			) {
				this.board[position[0]][index] = "hidden-ship";
			}
		} else if (axis === "y") {
			for (
				let index = position[0];
				index < position[0] + length;
				index++
			) {
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

		if (
			this.board[a][b] === "found-ship" ||
			this.board[a][b] === "missed"
		) {
			throw new Error(
				"You cannot hit a spot that you had already hit before."
			);
		}

		if (this.board[a][b] === "hidden-ship") {
			this.board[a][b] = "found-ship";
			this.ships.forEach(shipPresent => {
				const array = shipPresent.coordSet();
				const index = parseArray(array, [a, b]);
				if (index !== -1) shipPresent.hits(index);
			});
			return true;
		}
		if (this.board[a][b] === "empty") {
			this.board[a][b] = "missed";
		}
		return false;
	}

	allSunk() {
		const sunkArr = [];
		this.ships.forEach(ship => {
			sunkArr.push(ship.isSunk());
		});
		return sunkArr.indexOf(false) === -1;
	}
}

export { Board, testInitBoard };
