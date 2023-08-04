var hamburguer = document.getElementById("hamburguer");
var menu = document.getElementById("menu");

hamburguer.addEventListener("click", function() {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});