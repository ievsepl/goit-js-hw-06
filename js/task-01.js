const ulQuantity = document.querySelectorAll(".item");
console.log("Number of categories:", ulQuantity.length);
console.log(" ");

for (let nameLi of ulQuantity) {
	console.log("Category:", nameLi.firstElementChild.textContent);
	console.log("Elements:", nameLi.lastElementChild.children.length);
	console.log(" ");
}
