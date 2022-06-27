/* eslint-env jest */

import { Board } from "../factories/gameboard";
import Ship from "../factories/ship";
import generateBoard from "../util/boardgen";

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
		const earthShip = new Ship("Frigate", [1, 3]);
		earthShip.changeAxis("y");

		const fakeShip = new Ship("Carrier", [0, 5]);
		test("Checks for errors on placing ships at wrong coords", () => {
			expect(() => {
				board2.placeShip(fakeShip);
			}).toThrow();
		});

		test("Checks for ships in board", () => {
			const withStarShip = generateBoard();
			for (let i = 0; i < 5; i++) {
				withStarShip[0][i] = "hidden-ship";
			}

			board2.placeShip(starShip);
			expect(board2.board).toEqual(withStarShip);
		});
		test("Checks for ship in ship list", () => {
			expect(board2.ships).toEqual([starShip]);
		});
		test("Checks for ships in board", () => {
			const withAllShips = generateBoard();
			for (let i = 0; i < 5; i++) {
				withAllShips[0][i] = "hidden-ship";
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

	describe("_Checks the receiveAttack() function_", () => {
		const board3 = new Board();
		const starShip = new Ship("Destroyer", [1, 1]);
		board3.placeShip(starShip);

		test("Checks board after wrong attack x-coords", () => {
			expect(() => {
				board3.receiveAttack(8, 1);
			}).toThrow();
		});
		test("Checks board after wrong attack y-coords", () => {
			expect(() => {
				board3.receiveAttack(1, -2);
			}).toThrow();
		});

		test("Checks board after attack on a missed square", () => {
			const withAllShips = generateBoard();
			for (let i = 1; i < 4; i++) {
				withAllShips[1][i] = "hidden-ship";
			}
			withAllShips[5][5] = "missed";

			board3.receiveAttack(5, 5);
			expect(board3.board).toEqual(withAllShips);
		});

		test("Checks for wrong moves in a discovered square", () => {
			expect(() => {
				board3.receiveAttack(5, 5);
			}).toThrow();
		});

		test("Checks board after attack on a found square", () => {
			const withAllShips = generateBoard();
			for (let i = 1; i < 4; i++) {
				withAllShips[1][i] = "hidden-ship";
			}
			withAllShips[5][5] = "missed";
			withAllShips[1][2] = "found-ship";

			board3.receiveAttack(1, 2);
			expect(board3.board).toEqual(withAllShips);
		});

		test("Checks ship after hit", () => {
			expect(board3.ships[0].hitArr).toEqual([false, true, false]);
		});
	});
});
