export default function loadStartModal(mode) {
	const wrapper = document.createElement("div");
	wrapper.classList.add("wrapper");

	if (mode === "single") {
		const inp = document.createElement("input");
		inp.setAttribute("placeholder", " ");
		inp.setAttribute("required", true);
		const label = document.createElement("label");
		label.innerHTML = `Name<span class="red">*</span>`;

		const group = document.createElement("div");
		group.classList.add("form-group");
		group.appendChild(inp);
		group.appendChild(label);

		const button = document.createElement("button");
		button.classList.add("button", "start-btn");
		button.textContent = "Start Game!";
		[group, button].forEach(ele => {
			wrapper.appendChild(ele);
		});
	} else {
		const group1 = document.createElement("div");
		group1.classList.add("form-group");
		const group2 = document.createElement("div");
		group2.classList.add("form-group");

		[group1, group2].forEach((ele, i) => {
			const inp = document.createElement("input");
			inp.setAttribute("placeholder", " ");
			inp.setAttribute("required", true);
			const label = document.createElement("label");
			label.innerHTML = `Name ${i+1}<span class="red">*</span>`;

			ele.appendChild(inp);
			ele.appendChild(label);
		});

		const button = document.createElement("button");
		button.classList.add("button", "start-btn");
		button.textContent = "Start Game!";
		[group1, group2, button].forEach(ele => {
			wrapper.appendChild(ele);
		});
	}

	const main = document.querySelector("main");
	main.innerHTML = null;
	main.appendChild(wrapper);
}
