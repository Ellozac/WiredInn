about = document.getElementById("about");
home = document.getElementById("home");
fyp = document.getElementById("fyp")
console.log(window.location.pathname)
if (window.location.pathname == "/about.html") {
    about.style.backgroundColor = "rgb(223,139,61)";
} else if (window.location.pathname == "/index.html") {
    home.style.backgroundColor = "rgb(223,139,61)";
} else {
    fyp.style.backgroundColor = "rgb(223,139,61)";
};