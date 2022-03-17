const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll("section, header");
const navbarLinks = document.querySelectorAll(".navbar-link");
const progress = document.querySelector(".progress-bars-wrapper");
const progressPercents = document.querySelectorAll(".progress-bar-percent");

const progressBarPercents = [
  ...document.querySelectorAll(".progress-bar-text span"),
];

window.addEventListener("scroll", () => {
  initApp();
});

const initApp = () => {
  if (window.pageYOffset >= navbarOffsetTop) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }

  sections.forEach((section, index) => {
    if (window.pageYOffset >= section.offsetTop - 50) {
      navbarLinks.forEach((link) => {
        link.classList.remove("active");
      });
      navbarLinks[index].classList.add("active");
    }
  });

  if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
    progressPercents.forEach((ele, index) => {
      ele.style.width = `${Number(progressBarPercents[index].textContent)}%`;
    });
  }
};

initApp();

// window.addEventListener("resize", () => {
//   window.location.reload();
// });
