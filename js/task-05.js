const userName = document.querySelector("#name-output");
const textInput = document.querySelector("#name-input");
console.log(textInput);

textInput.addEventListener("input", event => {
	userName.textContent = event.currentTarget.value;
});
