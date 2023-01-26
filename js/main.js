const cssStyles = getComputedStyle(document.documentElement);

/* MENU NAVBAR */

const navbar = document.querySelector(".btn-group-vertical");
navbar.classList.replace("btn-group-vertical", "btn-group-horizontal");

/* HEADER */

const header = document.querySelector(".jumbotron");
header.classList.add("text-right");
header.style.backgroundColor = cssStyles.getPropertyValue("--gray");
header.style.color = cssStyles.getPropertyValue("--white");

const headerButton = header.querySelector(".btn");
headerButton.classList.replace("btn-primary", "btn-success");
