// Show Modal
const btnList = document.querySelectorAll(".btn-buy");
const modal = document.querySelector(".modal");
function showByTickets() {
  modal.classList.add("open");
}
for (const btn of btnList) {
  btn.addEventListener("click", showByTickets);
}

// Close Modal
const closeIcon = document.querySelector(".modal-close");
const modalContainer = document.querySelector(".modal-container");
function closeByTickets() {
  modal.classList.remove("open");
}
closeIcon.addEventListener("click", closeByTickets);
modal.addEventListener("click", closeByTickets);
modalContainer.addEventListener("click", function (e) {
  e.stopPropagation();
});

///Open Menu

const header = document.getElementById("header");
const mobileMenu = document.querySelector(".mobile-menu-btn");
const headerHeight = header.clientHeight;
mobileMenu.onclick = function () {
  let isClose = header.clientHeight === headerHeight;
  if (isClose) {
    header.style.height = "auto";
  } else {
    header.style.height = null;
  }
};

/// close menu when clicked nav
const menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (let i = 0; i < menuItems.length; i++) {
  let menuItem = menuItems[i];
  let isParentMenu =
    menuItem.nextElementSibling &&
    menuItem.nextElementSibling.classList.contains("subnav");
  menuItem.onclick = function (event) {
    if (isParentMenu) {
      event.preventDefault();
    } else {
      header.style.height = null;
    }
  };
}

// Automatic Slideshow
let curentIndex = 0;
sliderShow();

function sliderShow() {
  const sliderItems = document.querySelectorAll("#slider-item");
  for (let i = 0; i < sliderItems.length; i++) {
    sliderItems[i].style.display = "none";
  }
  curentIndex++;
  if (curentIndex > sliderItems.length) {
    curentIndex = 1;
  }
  sliderItems[curentIndex - 1].style.display = "block";
  setTimeout(sliderShow, 3000);
}
