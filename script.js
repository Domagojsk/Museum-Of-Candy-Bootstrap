'use strict';

window.addEventListener('scroll', function () {
  let nav = document.getElementById('mainNav');

  nav.classList.toggle('scrolled', window.scrollY >= 1);
});
