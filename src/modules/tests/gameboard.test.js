/* eslint-env jest */

import { Board } from "../factories/gameboard";
import Ship from "../factories/ship";

describe("___Gameboard Factory___", () => {
	const newBoard = new Board();

	describe("_Check properties_", () => {
		test("Checks for board", () => {
			const boardTest = Array(7).fill(Array(7).fill("empty"));
			expect(newBoard.board).toBe(boardTest);
		});
		test("Checks for ships", () => {
			expect(newBoard.ships).toBe([]);
		});
	});

	const withMorningStar = Array(7).fill(Array(7).fill("empty"));
	for ( let i = 0; i < 4; i++ ) {
		withMorningStar[1][i] = "hidden-ship";
	}

	describe("__Tries the placeShip() function__", () => {
		const MorningStar = new Ship("Carrier", [1, 0]);
		newBoard.placeShip(MorningStar);

		test("Checks for ships in board", () => {
			expect(newBoard.board).toBe(withMorningStar);
		});
		test("Checks for ship in ship list", () => {
			expect(newBoard.ships).toEqual([MorningStar]);
		});
	});

	describe("__Tries the receiveAttack() function__", () => {
		newBoard.receiveAttack(1, 3);
		withMorningStar[1][3] = "found-ship";

		test("Checks board after attack", () => {
			expect(newBoard.board).toBe(withMorningStar);
		});
	});
});
