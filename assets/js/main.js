document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  
  /**
   * Mobile nav toggle
   */
  const mobileNavShow = document.querySelector('.mobile-nav-show');
  const mobileNavHide = document.querySelector('.mobile-nav-hide');

  document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', function(event) {
      event.preventDefault();
      mobileNavToogle();
    })
  });

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navbar a').forEach(navbarlink => {

    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });







// scrol to top

  const scroltop = document.querySelector(".scroll-top");
  if (scroltop) {
    const toggleScrolto = () => {
      if (scrollY > 100) {
        scroltop.classList.add("active");
      } else {
        scroltop.classList.remove("active");
      }
    };
    window.addEventListener("load", toggleScrolto);
    window.addEventListener("scroll", toggleScrolto);
    scroltop.addEventListener(
      "click",
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    );
  }


  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  const aos_init = () => {
    AOS.init({
      duration: 2000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  };

  window.addEventListener("load", aos_init);

  window.onload = function() {
    var preloader = document.getElementById("preloader");
    preloader.style.display = "none";
  }

});
