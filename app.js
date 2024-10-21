document.getElementById("myButton").addEventListener("click", function() {
    document.getElementById("message").textContent = "Você clicou no botão!";
});


function openAgenda() {
    window.location.href = "agenda.html"; // Substitua pelo link correto da página de agenda
  }
  

  const menuItems = document.querySelectorAll('.menu a[href^="#"]');

  function getScrollTopByHref(element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
  }
  //criando a função de rolar para uma região
  function scrollToPosition(to) {
    smoothScrollTo(0, to);
  }
  
  function scrollToIdOnClick(event) {
    event.preventDefault();
    const to = getScrollTopByHref(event.currentTarget) - 80;
    scrollToPosition(to);
  }
  
  menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
  });
  
  //suporte a browsers antigos / que não suportam scroll smooth nativo por meio do script:
  
  function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();
  
    duration = typeof duration !== 'undefined' ? duration : 400;
  
    // Easing function
    const easeInOutQuart = (time, from, distance, duration) => {
      if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
      return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    };
  
    const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newX = easeInOutQuart(time, startX, distanceX, duration);
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      window.scroll(newX, newY);
    }, 1000 / 60); // 60 fps
  };