
// funcao para a navbar surgir quando o usuario estiver subindo a pagina 
// se ele subiu mais de 30px de pagina
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.header');
  const currentScroll = window.pageYOffset || document.body.scrollTop;

  if (currentScroll > lastScrollTop) {
    // o usuário está descendo a página
    navbar.classList.remove('show');
  } else if (currentScroll < lastScrollTop - 30) {
    // o usuário está subindo a página
    navbar.classList.add('show');
  }

  lastScrollTop = currentScroll;
});



