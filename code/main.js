const observer = new IntersectionObserver(function(contenu) {
  let i = 1;
  for (const elem of contenu) {
    if (elem.isIntersecting) {
      elem.target.style.opacity = 1;
      setTimeout(()=>{elem.target.classList.add("activated")}, i);
      i += 100;
      observer.unobserve(elem.target);
    }
  }
}, {threshold: 0.20});

document.addEventListener("DOMContentLoaded", function() {
  const contenu = document.querySelectorAll("#pageContent>*");
  for (const elem of contenu) {
    observer.observe(elem);
  }
});
