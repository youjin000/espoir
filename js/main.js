AOS.init({
    duration: 1000,
});

// banner
const banner_list = new Swiper (".banner_list",{
    loop: true, //슬라이드 반복
    pagination: {
                el: ".swiper-pagination",
                type: "progressbar", //버튼 종류 설정 'bullets'/'fraction'/'progressbar'
                clickable: true, //버튼 클릭 여부
            },
});

//new
const new_list = new Swiper (".new_list",{
    loop: true,
    spaceBetween: 30,
    slidesPerView: 1.5,
    breakpoints: {
        750: {
            slidesPerView: 2,
        },

        1200: {
            slidesPerView: 4,
        },
    },    

    centeredSlides: true,
    autoplay: { 
        delay: 3000, 
        disableOnInteraction: false,
    },

});