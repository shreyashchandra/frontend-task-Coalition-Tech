import "./style.css";

console.log("working");
const carousel = document.getElementsByClassName("carousel");
const imgsEl = document.getElementsByClassName("carousel__imgs");

imgsEl.addEventListener("click", (e) => {
  if (!e.target.classList.contains("carousel-img")) {
    return;
  }

  const imgEl = e.target;
  const img = imgEl.dataset.src;
  carousel.style.backgroundImage = `url(${img})`;
});
