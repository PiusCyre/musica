const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", (e) => {
  if (navMenu.classList.contains("hola")) {
    navMenu.classList.remove("hola");
  } else {
    navMenu.classList.add("hola");
  }
});

//code that i will soon delete
// menuBtn.add("click", function () {
//   navMenu.classList.add("hola");
// });
