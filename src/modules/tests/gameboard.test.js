/* eslint-env jest */

import { Board } from "../factories/gameboard";
import Ship from "../factories/ship";

const returnMorningStar = () => {
	const withMorningStar = Array(7).fill(Array(7).fill("empty"));
	for (let i = 0; i < 4; i++) {
		withMorningStar[1][i] = "hidden-ship";
	}
	return withMorningStar;
};
const returnNightStar = () => {
	const withMorningStar = returnMorningStar();
	const withNightStar = JSON.parse(JSON.stringify(withMorningStar));
	for (let i = 1; i < 3; i++) {
		withNightStar[i][3] = "hidden-ship";
	}
	return withNightStar;
};

describe("___Gameboard Factory___", () => {
	const newBoard = new Board();

	describe("_Check properties_", () => {
		test("Checks for board", () => {
			const boardTest = Array(7).fill(Array(7).fill("empty"));
			expect(newBoard.board).toEqual(boardTest);
		});
		test("Checks for ships", () => {
			expect(newBoard.ships).toEqual([]);
		});
	});

	describe("__Tries the placeShip() function__", () => {
		beforeEach(() => {
			const withMorningStar = returnMorningStar();
			const withNightStar = returnNightStar();
		});
		const MorningStar = new Ship("Carrier", [0, 0]);
		const NightStar = new Ship("Frigate", [3, 1]);

		const fakeStar = new Ship("Carrier", [0, 5]);
		NightStar.changeAxis("y");

		test("Checks for errors on placing ships at wrong coords", () => {
			expect(newBoard.placeShip(fakeStar)).toThrow(
				"Ship doesn't fit in board."
			);
		});

		newBoard.placeShip(MorningStar);
		test("Checks for ships in board", () => {
			expect(newBoard.board).toEqual(withMorningStar);
		});
		test("Checks for ship in ship list", () => {
			expect(newBoard.ships).toEqual([MorningStar]);
		});

		newBoard.placeShip(NightStar);
		test("Checks for ships in board", () => {
			expect(newBoard.board).toEqual(withNightStar);
		});
		test("Checks for ship in ship list", () => {
			expect(newBoard.ships).toEqual([MorningStar, NightStar]);
		});
	});

	describe("__Tries the receiveAttack() function__", () => {
		beforeEach(() => {
			const withNightStar = returnNightStar();
		});

		test("Checks board after wrong attack x-coords", () => {
			expect(newBoard.receiveAttack(8, 1)).toThrow(
				"The first argument is not a proper position coordinate."
			);
		});
		test("Checks board after wrong attack y-coords", () => {
			expect(newBoard.receiveAttack(1, -2)).toThrow(
				"The second argument is not a proper position coordinate."
			);
		});

		test("Checks board after attack on a missed square", () => {
			newBoard.receiveAttack(5, 5);
			withNightStar[5][5] = "missed";
			expect(newBoard.board).toEqual(withNightStar);
		});

		test("Checks board after attack on a found square", () => {
			newBoard.receiveAttack(2, 3);
			withNightStar[2][3] = "found-ship";
			expect(newBoard.board).toEqual(withNightStar);
		});
		
		test("Checks for wrong moves in a discovered square", () => {
			expect(newBoard.receiveAttack(5, 5)).toThrow("You cannot hit a spot that you had already hit before.");
		});
	});
});
