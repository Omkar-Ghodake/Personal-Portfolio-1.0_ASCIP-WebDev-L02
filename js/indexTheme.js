let themeIcon = document.querySelector(".theme-icon");
let myImage = document.querySelector(".my-image-img");
let favicon = document.querySelector("#favicon");


if (localStorage.getItem("theme") == null) {
	localStorage.setItem("theme", "light");
}

let localThemeData = localStorage.getItem("theme");
if (localThemeData == "light") {
	themeIcon.src = "images/moon.png";
	myImage.src = "images/my-image-white.png";
	favicon.setAttribute("href", "images/favicon-green.png");
	document.body.classList.remove("dark-theme");
}
else if (localThemeData == "dark") {
	themeIcon.src = "images/sun.png";
	myImage.src = "images/my-image-black.png";
	favicon.setAttribute("href", "images/favicon-yellow.png");
	document.body.classList.add("dark-theme");

}

themeIcon.addEventListener("click", () => {
	document.body.classList.toggle("dark-theme");
	if(document.body.classList.contains("dark-theme")) {
		themeIcon.src = "images/sun.png";
		myImage.src = "images/my-image-black.png";
		favicon.setAttribute("href", "images/favicon-yellow.png");
		localStorage.setItem("theme", "dark");
	} else {
		themeIcon.src = "images/moon.png";
		myImage.src = "images/my-image-white.png";
		favicon.setAttribute("href", "images/favicon-green.png");
		localStorage.setItem("theme", "light");
	}
});