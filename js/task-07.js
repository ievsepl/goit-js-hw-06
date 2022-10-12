const inputControl = document.querySelector("#font-size-control");
const textForChange = document.querySelector("#text");

console.log(inputControl);
console.log(textForChange);

inputControl.addEventListener("input", onFontChange);
function onFontChange(event) {
	// textForChange.style.fontSize = Number(event.currentTarget.value) + "px";
	textForChange.style.fontSize = `${event.currentTarget.value}px`;
}
