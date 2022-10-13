const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];
const ul = document.querySelector("#ingredients");
const element = [];
ingredients.forEach(ingredient => {
	const ingredientElement = document.createElement("li");
	ingredientElement.className = "item";
	ingredientElement.textContent = ingredient;
	element.push(ingredientElement);
});
ul.append(...element);
