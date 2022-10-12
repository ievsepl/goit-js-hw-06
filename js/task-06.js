const input = document.querySelector("#validation-input");
const changeStyle = document.querySelector("style");

input.addEventListener("blur", event => {
	if (Number(input.dataset.length) !== event.currentTarget.value.length) {
		console.log(input.dataset.length);
		input.classList.remove("valid");
		input.classList.add("invalid");
	} else {
		input.classList.remove("invalid");
		input.classList.add("valid");
	}
});
