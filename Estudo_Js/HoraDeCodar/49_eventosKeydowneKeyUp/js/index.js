document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    let titleSec = document.querySelector(".titleSec");
    let text = document.createTextNode("Soltou a Magia");
    titleSec.appendChild(text);
  }
});
