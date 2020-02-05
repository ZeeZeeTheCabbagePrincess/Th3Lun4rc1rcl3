function createNavbar(current)
{
    console.log(current);
    var div = document.getElementById("navDiv");
    var navbar = document.createElement("ul");
    navbar.setAttribute("class", "navbar");

    var home = document.createElement("li");
    home.setAttribute("class", "navItem");
    home.setAttribute("id", "Home");
    home.innerHTML = "<a href=\"index.html\">Home</a>";

    var about = document.createElement("li");
    about.setAttribute("class", "navItem");
    about.setAttribute("id", "AboutUs");
    about.innerHTML = "<a href=\"AboutUs.html\">What do we stand for?</a>";

    var sin = document.createElement("li");
    sin.setAttribute("class", "navItem");
    sin.setAttribute("id", "5Sins");
    sin.innerHTML = "<a href=\"Sins.html\">The 5 Sins</a>";

    navbar.appendChild(home);
    navbar.appendChild(about);
    navbar.appendChild(sin);

    div.appendChild(navbar);

    document.getElementById(current).classList.add("active");
}