const box = document.querySelector(".box");
const CenterDiv = document.querySelector(".CenterDiv");

function create() {
  const Cheack = document.createElement("div");
  CenterDiv.appendChild(Cheack);

  const Imges = document.createElement("img");
  Imges.className = "Img";
  Imges.src = "./Img/NonClick.png";
  Imges.onclick = function clcik() {
    Image.src = "./Img/Click.png";
  };
  Cheack.appendChild(Imges);
}

function Box() {
  box.src = "./Img/Click.png";
}
