function createNavbar(current)
{
    var div = document.getElementById("navDiv");
    var navbar = document.createElement("ul");
    navbar.setAttribute("class", "navbar");

    var home = document.createElement("li");
    home.setAttribute("class", "navItem");
    home.setAttribute("id", "Home");
    home.innerHTML = "<a href=\"index.html\">Home</a>";

    var about = document.createElement("li");
    about.setAttribute("class", "navItem");
    about.setAttribute("id", "The Eye Of The Almighty");
    about.innerHTML = "<a href=\"theEye.html\">The Eye Of The Almighty</a>";

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