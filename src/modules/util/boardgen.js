export default function generateBoard() {
	const array = [];
	for ( let i = 0; i < 7; i++ ) {
		const newArr = new Array(7).fill("empty");
		array.push(newArr);
	}
	return array;
}