const toAppend = document.querySelector(".portfolio-grid");

for (let x = 0; x < 40; x++) {
  const thumb = document.createElement("div");
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  thumb.setAttribute("class", "thumbnail");
  thumb.style.cssText = `background-color: #${randomColor}`;
  toAppend.appendChild(thumb);
}
