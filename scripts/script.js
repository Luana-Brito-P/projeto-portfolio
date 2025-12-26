const botao = document.getElementById('botao-tema');
const body = document.body;

// Persistência do tema
const temasalvo = localStorage.getItem('tema');
temaEscuro(temasalvo === 'escuro');//se tema salvo for escuro a chamar a função e ficar escuro

// Função para alternar entre tema claro e escuro
function temaEscuro(tipo) {
  if (tipo == true) { //se n tiver no escuro
    body.classList.add('escuro'); //adiciona class escuro
    botao.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else { // se tiver no escuro
    body.classList.remove('escuro'); //remove class escuro
    botao.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
}

// ao clicar no botão
botao.addEventListener('click', () => {
  const isescuro = body.classList.toggle('escuro'); //isescuro adiciona a class escuro ao body
  temaEscuro(isescuro); //chamda de função com o tipo isescuro
  localStorage.setItem('tema', isescuro ? 'escuro' : 'claro');// se estiver no modo claro então o tema (la na memória) será "escuro" e vice-versa;
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