"use strict";

window.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll and pageup

  function smoothScroll() {
    let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  const pageup = document.querySelector("#pageup");
  pageup.addEventListener("click", (event) => {
    event.preventDefault();
    smoothScroll();
  });

  document.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 1200) {
      pageup.style.display = "block";
    } else {
      pageup.style.display = "";
    }
  });
});
