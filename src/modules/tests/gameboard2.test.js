/* eslint-env jest */

import { Board } from "../factories/gameboard";
import Ship from "../factories/ship";

describe("__Gameboard factory__", () => {
	describe("_Newly initialized board_", () => {
		const board1 = new Board();

		test("Checks empty board", () => {
			const boardTest = Array(7).fill(Array(7).fill("empty"));
			expect(board1.board).toEqual(boardTest);
		});
		test("Checks empty ship array", () => {
			expect(board1.ships).toEqual([]);
		});
	});

	describe("_Checks the placeShip() function_", () => {
		const board2 = new Board();
		const starShip = new Ship("Carrier", [0, 0]);
		const earthShip = new Ship("Frigate", [3, 1]);
		earthShip.changeAxis("y");

		const fakeShip = new Ship("Carrier", [0, 5]);
		test("Checks for errors on placing ships at wrong coords", () => {
			expect(() => {
				board2.placeShip(fakeShip);
			}).toThrow();
		});

		test("Checks for ships in board", () => {
			const withStarShip = Array(7).fill(Array(7).fill("empty"));
			for (let i = 0; i < 5; i++) {
				withStarShip[1][i] = "hidden-ship";
			}

			board2.placeShip(starShip);
			expect(board2.board).toEqual([["hidden-ship", "hidden-ship", "hidden-ship", "hidden-ship", "hidden-ship", "empty", "empty"],
			["empty", "empty", "empty", "empty", "empty", "empty", "empty"],
			["empty", "empty", "empty", "empty", "empty", "empty", "empty"],
			["empty", "empty", "empty", "empty", "empty", "empty", "empty"],
			["empty", "empty", "empty", "empty", "empty", "empty", "empty"],
			["empty", "empty", "empty", "empty", "empty", "empty", "empty"],
			["empty", "empty", "empty", "empty", "empty", "empty", "empty"]]);
		});
		test("Checks for ship in ship list", () => {
			expect(board2.ships).toEqual([starShip]);
		});
		test("Checks for ships in board", () => {
			const withAllShips = Array(7).fill(Array(7).fill("empty"));
			for (let i = 0; i < 4; i++) {
				withAllShips[1][i] = "hidden-ship";
			}
			for (let i = 1; i < 3; i++) {
				withAllShips[i][3] = "hidden-ship";
			}

			board2.placeShip(earthShip);
			expect(board2.board).toEqual(withAllShips);
		});
		test("Checks for ship in ship list", () => {
			expect(board2.ships).toEqual([starShip, earthShip]);
		});
	});
});
