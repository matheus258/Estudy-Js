// Evento MouseOver
let title = document.querySelector(".title");
console.log(title);

title.addEventListener("mouseover", function () {
  let colorTitle = "#ff5722";
  title.style.color = colorTitle;
});
// Evento MouseOut
title.addEventListener("mouseout", function () {
  let colorTitleDefault = "black";
  title.style.color = colorTitleDefault;
});

let subtitle = document.querySelector(".subTitle");

console.log(subtitle);
subtitle.addEventListener("mouseover", function () {
  let colorSubtitle = "blue";
  subtitle.style.color = colorSubtitle;
});

// Ao tirar o mouse
subtitle.addEventListener("mouseout", function () {
  let colorBlack = "black";
  subtitle.style.color = colorBlack;
});
