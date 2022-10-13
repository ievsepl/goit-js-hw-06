const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
	event.preventDefault();
	const formElements = event.currentTarget.elements;
	const email = formElements.email.value;
	const password = formElements.password.value;
	if (email === "" || password === "") {
		alert("All field should be fill");
	} else {
		const formData = {
			email,
			password,
		};
		console.log(formData);
		form.email.value = "";
		form.password.value = "";
		// event.currentTarget.reset();
	}
}
