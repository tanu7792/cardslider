new swiper('.card-wrapper', {
loop: true,
spaceBetween: 30,

//  pagination bullets
pagination: {
  el: '.swiper-pagination',
  clickable: true,
  dynamicBullets: true


},

// Navigation arrows
navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
},
// resposive breakpoints
breakpoints: {
    0: {
        slidePerView: 1
    },
    768: {
        slidePerView: 2
    },
    1024: {
        slidePerView: 3
    },

}
});