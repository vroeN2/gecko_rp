const cookies = document.getElementById("cookies");
const button = document.getElementById("cookies__agree");

button.addEventListener("click", () => cookies.classList.add("hidden"));

const expandedMenu = document.querySelector(".expanded_menu");
const menuItems = document.querySelectorAll(".expandable");
const homepage = document.querySelector("div.content__homepage");
let isDropdownVisible = false;

menuItems.forEach((singleItem) => {
  const linkArrow = singleItem.querySelector("i.arrow");
  const itemLeft = singleItem.offsetLeft;

  singleItem.addEventListener("mouseover", () => {
    expandedMenu.style.left = `${itemLeft}px`;
    expandedMenu.classList.remove("hidden");
    expandedMenu.classList.add("visible");

    linkArrow.style.transform = "rotate(0deg)";
    isDropdownVisible = true;
  });
  homepage.addEventListener("mouseover", () => {
    expandedMenu.classList.remove("visible");
    expandedMenu.classList.add("hidden");

    linkArrow.style.transform = "rotate(180deg)";
  });
});

const cards = document.querySelectorAll("div.card-blue");
let maxHeight = 0;
cards.forEach((card) => {
  if (card.clientHeight > maxHeight) maxHeight = card.clientHeight;
});

cards.forEach((card) => {
  card.style.height = `${maxHeight}px`;
});
