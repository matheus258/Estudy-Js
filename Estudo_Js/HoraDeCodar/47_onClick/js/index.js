// Evento CLick
let btn = document.querySelector(".buttonEvent");

btn.addEventListener("click", function () {
  console.log("Hello");
  this.style.cssText = "color: red; background-color:black";
});
