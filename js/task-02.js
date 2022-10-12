const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];
const ul = document.querySelector("#ingredients");

ingredients.forEach(ingredient => {
	const element = document.createElement("li");
	element.className = "item";
	element.textContent = ingredient;
	ul.append(element);
});

