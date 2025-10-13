const botao = document.getElementById('botao-tema');
const body = document.body;

// Persistência do tema
const temasalvo = localStorage.getItem('tema');
temaEscuro(temasalvo === 'escuro');

// Função para alternar entre tema claro e escuro
function temaEscuro(tipo) {
  if (tipo == true) {
    body.classList.add('escuro');
    botao.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    body.classList.remove('escuro');
    botao.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
}

botao.addEventListener('click', () => {
  const isescuro = body.classList.toggle('escuro');
  temaEscuro(isescuro);
  localStorage.setItem('tema', isescuro ? 'escuro' : 'claro');
});

// Scroll suave para links de navegação
const navLinks = document.querySelectorAll('#menu ul a.link');
navLinks.forEach(link => { //pra cada navlinks, ao clicar acontecerá...
  link.addEventListener('click', function(e) {
    e.preventDefault(); //prevenção de ação, ou seja ao clicar e antes de ocorrer a ação principal
    const target = document.querySelector(this.getAttribute('href'));//pega o href
    if (target) {
      const headerHeight = document.querySelector('header').offsetHeight;// pegar altura do header
      const targetPosition = target.offsetTop - headerHeight - 20;// vai pegar a altura do target e diminuir o tamanho do header e diminuir 20px
      
      window.scrollTo({ // ROLAGEM DE TELA
        top: targetPosition, // vai para a altura calculada
        behavior: 'smooth' //rolagem suave
      });
    }
  });
});