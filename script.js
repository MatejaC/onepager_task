const header = document.querySelector(".header1");
const sectionOne = document.querySelector("main");

const sectionOneOptions = {
  threshold: 0,
  root: null,
  rootMargin: "-450px 0px 0px 0px",
};

const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    console.log(entry.target);
    if (entry.isIntersecting) {
      header.classList.add("header-scrolled");
    } else {
      header.classList.remove("header-scrolled");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);
