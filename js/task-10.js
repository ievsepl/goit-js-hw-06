const refs = {
	controls: document.querySelector("#controls"),
	createBtn: document.querySelector("[data-create]"),
	destroyBtn: document.querySelector("[data-destroy]"),
	boxes: document.querySelector("#boxes"),
	inputNumber: controls.firstElementChild,
};

refs.inputNumber.addEventListener("input", boxesQuantity);
refs.createBtn.addEventListener("click", createBoxes);
refs.destroyBtn.addEventListener("click", destroyBoxes);

function boxesQuantity(event) {
	return event.currentTarget.value;
}

function createBoxes() {
	refs.boxes.innerHTML = "";
	const element = [];
	for (let i = 0; i < refs.inputNumber.value; i += 1) {
		const boxesElement = document.createElement("div");
		boxesElement.style.width = 30 + 10 * i + "px";
		boxesElement.style.height = 30 + 10 * i + "px";
		boxesElement.style.backgroundColor = getRandomHexColor();
		boxesElement.style.margin = "15px";
		element.push(boxesElement);
	}
	boxes.append(...element);
}

function destroyBoxes() {
	refs.boxes.innerHTML = "";
	refs.inputNumber.value = "";
}

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
