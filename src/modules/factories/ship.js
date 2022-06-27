import shipdtls from "../util/ship-info";

export default class Ship {
	constructor(shipType, position) {
		const { name, length, icon } = shipdtls()[shipType];
		this.name = name;
		this.length = length;
		this.icon = icon;

		this.position = position;
		this.axis = "x";
		this.hitArr = Array(length).fill(false);
	}

	changeAxis = axisArg => {
		if (axisArg) {
			this.axis = axisArg;
		} else {
			this.axis = this.axis === "x" ? "y" : "x";
		}
	};

	hits = index => {
		if (index >= 0 && index < this.length) this.hitArr[index] = true;
	};

	coordSet = () => {
		const array = [];
		const { axis, position, length } = this;
		for (let i = 0; i < length; i++) {
			array.push((
				axis === "x"
					? [position[0], position[1] + i]
					: [position[0] + i, position[1]]
			));
		}
		return array;
	};

	isSunk = () => this.hitArr.reduce(val => val === true);
}
