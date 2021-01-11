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
  if (document.querySelector(".swiper-container") instanceof Element && typeof Swiper === "function") {
    console.log("J'ai détecté un swiper c: ");
    const mySwiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });
  }

  if (document.querySelector(".tabsVerticales") instanceof Element) {
    console.log("J'ai détecté une tab verticale c: ");
    function openTab(tabId="Chine") {
      console.log("ouverture de", tabId);
      const aOuvrir = document.querySelector(tabId);
      const aActiver = document.querySelector(`a[href="${tabId}"]`);
      const aFermer = document.querySelector(".tabsVerticales .boutons .active");
      const aCacher = document.querySelector(".tabsVerticales .items .active");
      aFermer.classList.remove("active");
      aCacher.classList.remove("active");
      aOuvrir.classList.add("active");
      aActiver.classList.add("active");
    }
    for (const lien of document.querySelectorAll(".tabsVerticales .boutons a")) {
      lien.addEventListener("click", () => {
        openTab( lien.getAttribute("href") );
      });
    }
  }
      
});
