function testInitBoard() {}

class Board {
	constructor() {
		this.stack = Array(7).fill(Array(7).fill({
			used: false,
			shipLocated: false
		}));
	}
}

export { Board, testInitBoard }