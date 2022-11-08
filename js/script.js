let burger = document.querySelector('.menu-burger');
let menuList = document.querySelector('.menu-list') 
burger.addEventListener('click', () => {
    burger.classList.toggle('active-burger');
    menuList.classList.toggle('list-active')
})
$('.pets').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  });