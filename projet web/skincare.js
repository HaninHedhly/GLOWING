document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper('.swiper', {
        loop: true, // Rend le carousel infini
        autoplay: {
            delay: 3000, // Temps entre les slides
            disableOnInteraction: false, // Continue même après une interaction utilisateur
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
  });
  
  
  const bar = document.getElementById('bar');
  const close = document.getElementById('close');
  const nav = document.getElementById('navbar');
  
  if(bar){
      bar.addEventListener('click', () =>{
          nav.classList.add('active');
      })
  }
  
  if(close){
      close.addEventListener('click', () =>{
          nav.classList.remove('active');
      })
  }
