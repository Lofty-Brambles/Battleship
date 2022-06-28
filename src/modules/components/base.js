/* eslint-disable no-param-reassign */
import onePlay from "./one-player";
import twoPlay from "./two-player";

import DiscordLogo from "../../assets/discord.webp";
import GithubLogo from "../../assets/github.png";
import Image from "../../assets/logo.png";

function makeheader() {
	const header = document.createElement("header");
	const headerTxt = document.createElement("h2");
	const headerImg = document.createElement("img");

	headerTxt.textContent = "Battleship!";
	headerTxt.classList.add("header-txt", "block");
	headerImg.src = Image;
	headerImg.alt = "Logo Image";
	headerImg.classList.add("header-img", "block");

	[headerTxt, headerImg].forEach(ele => {
		header.appendChild(ele);
	});
	return header;
}

function makeNav() {
	const nav = document.createElement("nav");
	const twoPlayerMode = document.createElement("button");
	const onePlayerMode = document.createElement("button");
	const activateBtn = btn => {
		nav.querySelectorAll("button").forEach(button => {
			button.classList.remove("active");
		});
		btn.classList.add("active");
	};

	twoPlayerMode.innerHTML = `<span class="material-symbols-outlined">group</span><span>Player vs. Player</span>`;
	onePlayerMode.innerHTML = `<span class="material-symbols-outlined">dvr</span><span>Player vs. Computer</span>`;
	twoPlayerMode.addEventListener("click", e => {
		if (e.target.classList.contains("active")) return;
		activateBtn(twoPlayerMode);
		twoPlay();
	});
	onePlayerMode.addEventListener("click", e => {
		if (e.target.classList.contains("active")) return;
		activateBtn(onePlayerMode);
		onePlay();
	});

	[onePlayerMode, twoPlayerMode].forEach(ele => {
		nav.appendChild(ele);
	});
	return { nav, activateBtn };
}

function makeBody() {
	const main = document.createElement("main");
	main.style.flexGrow = "1";
	return main;
}

function makeFooter() {
	const foot = document.createElement("footer");
	const discord = document.createElement("a");
	const github = document.createElement("a");
	const footTxt = document.createElement("div");
	const footArr = [discord, footTxt, github];

	footTxt.textContent = `Made with ♥ by Lofty Brambles`;
	footArr.forEach((ele, i) => {
		if (i !== 1) {
			const image = document.createElement("img");
			if (i === 0) {
				ele.href = " https://discord.com/users/740094143379800156";
				image.src = DiscordLogo;
				image.alt = "discord";
			} else {
				ele.href = "https://github.com/Lofty-Brambles/restuarant-page";
				image.src = GithubLogo;
				image.alt = "github";
			};
			ele.appendChild(image);
		};
		foot.appendChild(ele);
	});
	return foot;
}

export default function initPage() {
	document.body.appendChild(makeheader());
	const { nav } = makeNav();
	document.body.appendChild(nav);
	document.body.appendChild(makeBody());
	document.body.appendChild(makeFooter());

	const link = document.createElement("link");
	link.setAttribute("rel", "stylesheet");
	link.setAttribute(
		"href",
		"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
	);
	document.head.appendChild(link);

	document.body.querySelectorAll("nav > button")[0].click();
}
