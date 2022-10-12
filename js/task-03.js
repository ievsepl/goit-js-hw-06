const images = [
	{
		url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "White and Black Long Fur Cat",
	},
	{
		url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "Orange and White Koi Fish Near Yellow Koi Fish",
	},
	{
		url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "Group of Horses Running",
	},
];
const gallery = document.querySelector(".gallery");
const item = images.map(image => `<li class="jpg"><img src="${image.url}" alt="${image.alt}" width = "300 px"> </li>`);

gallery.insertAdjacentHTML("afterbegin", item);

const jpg = document.querySelectorAll(".jpg");

jpg.forEach(pic => {
	pic.style.backgroundColor = "green";
});

gallery.style.listStyle = "none";
gallery.style.display = "flex";
gallery.style.justifyContent = "space-around";
