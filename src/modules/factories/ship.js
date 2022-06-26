/* eslint-disable no-param-reassign */
import shipdtls from "../info/ship-info";

export default function Ship(shipType, position) {
	const shipDetails = shipdtls();

	// Imports ship details
	const { name, length } = shipDetails[shipType];
	let axis = "x";
	const hitArr = Array(length).fill(false);

	// Setter/Toggler for axis
	const changeAxis = axe => {
		if (axe) {
			axis = axe;
		} else {
			axis = axis === "x" ? "y" : "x";
		}
	};

	// hit( index ) -> Marks index as hit
	const hits = i => {
		if (i >= 0 && i < length) hitArr[i] = true;
	};

	// isSunk() -> Check sink
	const isSunk = () => hitArr.reduce(prev => prev === true);

	return { name, position, axis, length, hitArr, changeAxis, hits, isSunk };
}

