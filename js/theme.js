let themeIcon = document.querySelector(".theme-icon");
let favicon = document.querySelector("#favicon");



if (localStorage.getItem("theme") == null) {
	localStorage.setItem("theme", "light");
}

let localThemeData = localStorage.getItem("theme");
if (localThemeData == "light") {
	themeIcon.src = "images/moon.png";
	favicon.setAttribute("href", "images/favicon-green.png");
	document.body.classList.remove("dark-theme");
}
else if (localThemeData == "dark") {
	themeIcon.src = "images/sun.png";
	favicon.setAttribute("href", "images/favicon-purple.png");
	document.body.classList.add("dark-theme");
}

themeIcon.addEventListener("click", () => {
	document.body.classList.toggle("dark-theme");
	if(document.body.classList.contains("dark-theme")) {
		themeIcon.src = "images/sun.png";
		favicon.setAttribute("href", "images/favicon-yellow.png");
		localStorage.setItem("theme", "dark");
	} else {
		themeIcon.src = "images/moon.png";
		favicon.setAttribute("href", "images/favicon-green.png");
		localStorage.setItem("theme", "light");
	}
});