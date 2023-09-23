const carousel = document.querySelector(".carousel");
const imgsEl = document.querySelector(".carousel__imgs");
const imgsList = imgsEl.querySelectorAll(".carousel__img");
const dotsContainer = document.querySelector(".dots");

console.log(imgsList);

const currentImg = carousel.style.backgroundImage;

(function () {
  imgsList.forEach((imgEl, i) => {
    dotsContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot ${
        i === 0 ? "dots__dot--active" : ""
      }" data-src="${imgEl.dataset.src}"></button>`
    );
  });
})();

imgsEl.addEventListener("click", (e) => {
  if (!e.target.classList.contains("carousel__img")) {
    return;
  }
  console.log(e.target);

  const img = e.target.dataset.src;
  carousel.style.backgroundImage = `url(${img})`;
});

function updateDots() {
  dotsContainer
    .querySelector(".dots__dot--active")
    ?.classList.remove("dots__dot--active");

  const dot = dotsContainer
    .querySelectorAll(".dots__dot")
    .filter((imgEl) => currentImg === imgEl.style.backgroundImage);

  dot.classList.add("dots__dot--active");
}

dotsContainer.addEventListener("click", (e) => {
  if (!e.target.classList.contains("dots__dot")) {
    return;
  }
  console.log(e.target);
  dotsContainer
    .querySelector(".dots__dot--active")
    ?.classList.remove("dots__dot--active");

  e.target.classList.add("dots__dot--active");

  const img = e.target.dataset.src;
  carousel.style.backgroundImage = `url(${img})`;
});
