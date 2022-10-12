const refs = {
	colorBody: document.querySelector("body"),
	btn: document.querySelector(".change-color"),
	nameColor: document.querySelector(".color"),
};

refs.btn.addEventListener("click", onChangeColor);

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function onChangeColor() {
	refs.colorBody.style.backgroundColor = getRandomHexColor();
	refs.nameColor.textContent = `${refs.colorBody.style.backgroundColor}`;
	console.log(refs.colorBody.style.backgroundColor);
}
