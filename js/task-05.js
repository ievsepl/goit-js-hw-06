const userName = document.querySelector("#name-output");
const textInput = document.querySelector("#name-input");
console.log(textInput.value);

textInput.addEventListener("input", onChangeName);

function onChangeName(event) {
	if (event.currentTarget.value !== "") {
		userName.textContent = event.currentTarget.value;
	} else {
		userName.textContent = "Anonymous";
	}
}
