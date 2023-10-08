function toggle_nav_bar_visibility() {
    let nbl = document.getElementById("nav-bar-list");
    let nb_toggler = document.getElementById("toggler_nav_bar_visibility");

    if (nbl.style.display === "none") {
        nb_toggler.innerHTML = "Hide Nav Bar";
        nbl.style.display = "block";
    }
    else {
        nb_toggler.innerHTML = "Show Nav Bar";
        nbl.style.display = "none";
    }
}
