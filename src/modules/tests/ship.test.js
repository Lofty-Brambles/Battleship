/* eslint-env jest */
import Ship from "../factories/ship";

describe("__Ship Factory__", () => {
	describe("_Fetch Properties_", () => {
		const ship = new Ship("Carrier", [0, 1]);

		test("Checks Name", () => {
			expect(ship.name).toBe("Carrier");
		});
		test("Checks Length", () => {
			expect(ship.length).toBe(5);
		});
		test("Checks Direction", () => {
			expect(ship.axis).toBe("x");
		});
		test("Checks Position", () => {
			expect(ship.position).toEqual([0, 1]);
		});
	});

	describe("_Change axis f(x)_", () => {
		const ship = new Ship("Submarine", [0, 1]);

		test("Checks axis alignment - y", () => {
			ship.changeAxis("y");
			expect(ship.axis).toBe("y");
		});
		test("Checks axis alignment - x", () => {
			ship.changeAxis("x");
			expect(ship.axis).toBe("x");
		});
		test("Checks axis alignment - toggle", () => {
			ship.changeAxis();
			expect(ship.axis).toBe("y");
		});
	});

	describe("_Add hit effects_", () => {
		const ship = new Ship("Destroyer", [0, 1]);

		test("Checks hit array", () => {
			expect(ship.hitArr).toEqual([false, false, false]);
		});
		test("Checks hit f(x) for a index", () => {
			ship.hits(1);
			expect(ship.hitArr).toEqual([false, true, false]);
		});
		test("Checks hit f(x) for a wrong index", () => {
			ship.hits(-1);
			expect(ship.hitArr).toEqual([false, true, false]);
		});
	});

	describe("_Checks sink functionality_", () => {
		const ship = new Ship("Frigate", [0, 1]);

		test("Checks isSunk f(x) for an unsunk ship", () => {
			ship.hits(1);
			expect(ship.isSunk()).toBe(false);
		});
		test("Checks isSunk f(x) for an sunken ship", () => {
			ship.hits(0);
			expect(ship.isSunk()).toBe(true);
		});
	});

	describe("_Generates body Array_", () => {
		const ship = new Ship("Submarine", [0, 1]);

		test("Check if proper body positions are generated in x-axis", () => {
			expect(ship.coordSet()).toEqual([[0, 1], [0, 2], [0, 3], [0, 4]]);
		});
		test("Check if proper body positions are generated in y-axis", () => {
			ship.changeAxis();
			expect(ship.coordSet()).toEqual([[0, 1], [1, 1], [2, 1], [3, 1]]);
		});
	});
});
