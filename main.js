document.querySelectorAll(".mySwiper").forEach(swiperEl => {
    const swiper = new Swiper(swiperEl, {
        direction: "vertical",
        slidesPerView: "auto",
        spaceBetween: 24,
        loop: true,
        speed: 3000,

        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },

        // 🖱 Scroll instead of grab
        mousewheel: {
            forceToAxis: true,
            sensitivity: 1,
            releaseOnEdges: true,
        },

        grabCursor: false,
    });

    // Pause on hover
    swiperEl.addEventListener("mouseenter", () => swiper.autoplay.stop());
    swiperEl.addEventListener("mouseleave", () => swiper.autoplay.start());
});

//school slider
var schoolSwiper = new Swiper(".schoolSwiper", {
    spaceBetween: 20,
    loop: true,

    grid: {
        rows: 2,
        fill: "row", // 🔥 REQUIRED
    },

    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },

    speed: 3000,
    breakpoints: {
        0: {
            slidesPerView: 1,
            grid: {
                rows: 1,
            },
        },
        768: {
            slidesPerView: 3,
            grid: {
                rows: 2,
            },
        },
        1024: {
            slidesPerView: 6,
            grid: {
                rows: 2,
            },
        },
    },
});

//exhibition slider
var exhibitionSwiper = new Swiper(".exhibitionSwiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    speed: 800,

    navigation: {
        nextEl: ".exhibition-next",
        prevEl: ".exhibition-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
            grid: {
                rows: 1,
            },
        },
        768: {
            slidesPerView: 3,
            grid: {
                rows: 2,
            },
        },
        1024: {
            slidesPerView: 4,
            grid: {
                rows: 2,
            },
        },
    },
});

//slide button
$(document).ready(function () {
    $(".slideBtn").on("click", function () {
        $(this).toggleClass("active");
    });
});