let backdrop = document.querySelector(".backdrop");
let modal = document.querySelector(".modal");
let modalNoButton = document.querySelector(".modal__action--negative");
let selectPlanButton = document.querySelectorAll(".plan button.button");

let toggleButton = document.querySelector(".toggle-button");
let mobileNav = document.querySelector("nav.mobile-nav");
// console.dir(backdrop);
// console.dir(selectPlanButton);
for (let i = 0; i < selectPlanButton.length; i++) {
  selectPlanButton[i].addEventListener("click", function () {
    // backdrop.style.display = "block";
    // modal.style.display = "block";
    modal.classList.add("open");
    backdrop.classList.add("open");
  });
}

backdrop.addEventListener("click", function () {
  // mobileNav.style.display = "none";
  mobileNav.classList.remove("open");
  closeModal();
});
modalNoButton.addEventListener("click", closeModal);

function closeModal() {
  // backdrop.style.display = "none";
  // modal.style.display = "none";
  modal.classList.remove("open");
  backdrop.classList.remove("open");
}

toggleButton.addEventListener("click", function () {
  // mobileNav.style.display = "block";
  // backdrop.style.display = "block";
  mobileNav.classList.add("open");
  backdrop.classList.add("open");
});
