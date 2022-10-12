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

	for (let i = 0; i < refs.inputNumber.value; i += 1) {
		const element = document.createElement("div");
		element.style.width = 30 + 10 * i + "px";
		element.style.height = 30 + 10 * i + "px";
		element.style.backgroundColor = getRandomHexColor();
		element.style.margin = "15px";
		boxes.append(element);
		console.log(element.style.width);
	}
}

function destroyBoxes() {
	refs.boxes.innerHTML = "";
	refs.inputNumber.value = "";
}

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
