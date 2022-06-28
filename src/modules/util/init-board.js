import Player from "../factories/player";
import Ship from "../factories/ship";

function shipInit() {
	return [
		new Ship("Carrier", [0, 0]),
		new Ship("Submarine", [0, 0]),
		new Ship("Destroyer", [0, 0]),
		new Ship("Frigate", [0, 0])
	];
}

function loadBoard() {
	const boardUI = document.createElement("div");
	boardUI.classList.add("board");
	for ( let i = 0; i < 7; i++ ) {
		for ( let j = 0; j < 7; j++ ) {
			const cell = document.createElement("div");
			cell.classList.add("cell");
			cell.dataset.x = i;
			cell.dataset.y = j;
			boardUI.appendChild(cell);
		}
	}
	return boardUI;
}

export default function initBoardSetup(nameVal) {
	const wrapper = document.createElement("div");
	wrapper.classList.add("wrapper");

	nameVal.forEach(ele => {
		const player = new Player(ele, true);
		const playerTab = document.createElement("div");
		playerTab.classList.add("player-tab");
		playerTab.setAttribute("id", ele);

		const headTag = document.createElement("div");
		headTag.textContent = `Hey ${player.name}, time to place yoour ships!`;
		headTag.classList.add("head-tag");
		
		const boardUI = loadBoard();

		const shipBar = document.createElement("div");
		shipBar.classList.add("ship-bar");
		shipInit().forEach(element => {
			const image = document.createElement("img");
			image.src = element.icon;
			image.alt = element.name;
			image.setAttribute("id", element.name);
			image.classList.add("block");
			shipBar.appendChild(image);
		});

		const button = document.createElement("button");
		button.classList.add("button", "start-btn");
		button.textContent = "Start Game!";

		[headTag, boardUI, shipBar, button].forEach(element => {
			playerTab.appendChild(element);
		});
		wrapper.appendChild(playerTab);
	});
}