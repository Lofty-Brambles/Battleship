/* eslint-env jest */

import Player from "../factories/player";

describe("__Checks all of Player modules__", () => {
	const player = new Player("peepo");
	describe("_Check all of the properties_", () => {
		test("Checks for name of player", () => {
			expect(player.name).toBe("peepo");
		});
		test("Checks for type of player", () => {
			expect(player.type).toBe("Player");
		});
		test("Checks for turn of player", () => {
			expect(player.turn).toBe(false);
		});
		test("Checks for board of player", () => {
			expect(player.boardset.board).toEqual(Array(7).fill(Array(7).fill("empty")));
		});
	});

	describe("_Check the toggleturn() method_", () => {
		test("Checks if it indeed toggles", () => {
			player.toggleTurn();
			expect(player.turn).toBe(true);
		});
	});

	describe("_Check for the board effects_", () => {
		test("Checks if it detects human", () => {
			player.type = "Bot";
			expect(() => {player.attackReceived(0,0);}).toThrow();
		});
		test("Checks if it detects human", () => {
			player.type = "Player";
			expect(player.attackReceived(0,0)).toBe(false);
		});
		test("Check if player can play without it being their turn", () => {
			expect(() => {player.attackReceived(0,0);}).toThrow();
		});
	});
});