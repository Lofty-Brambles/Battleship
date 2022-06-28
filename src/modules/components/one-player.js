import initBoardSetup from "./init-board";
import loadStartModal from "./load-start";

export default function onePlay() {
	loadStartModal("single");

	const nameVal = [];
	document.querySelector(".start-btn").addEventListener("click", e => {
		const names = e.target.previousSibling.querySelectorAll("input");
		names.forEach(ele => {
			nameVal.push(ele.value);
		});
	});
	initBoardSetup(nameVal);
}