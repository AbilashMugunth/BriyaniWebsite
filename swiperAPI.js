let homeswiper = new Swiper(".homeSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    effect: "fade",

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});

let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 40,
        },

        1600: {
            slidesPerView: 4,
            spaceBetween: 60,
        },
    },
});
