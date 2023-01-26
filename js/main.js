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

/* CARDS */

const cards = document.querySelectorAll(".row .col-lg-3");
const animalCardButton = cards[0].querySelector(".btn");
const itemsOrder = [2, 4, 3, 1];

animalCardButton.classList.replace("btn-primary", "btn-success");

cards.forEach((card, position) => {
  card.style.order = itemsOrder[position];
});
