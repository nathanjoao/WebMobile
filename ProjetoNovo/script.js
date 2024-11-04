const mensagem = document.getElementById("mensagem");
const imagem = document.getElementById("imagem");
const novoParagrafo = document.createElement('p');  
const titulo = document.getElementById('titulo')
const img = document.querySelector('img');
const link = document.querySelector('a');
const imagens = document.querySelectorAll('img');

mensagem.innerHTML = "<p>texto simples</p>";
mensagem.textContent = "<p>texto simples</p>";

// imagem.src = "pexels-pixabay-355952.jpg"; 
imagem.setAttribute('src', 'idea.jpg');
imagem.setAttribute('alt', 'foto imaegemgisenfksnk');

mensagem.classList.add("ativo");
// mensagem.classList.toggle("ativo"); se tem a classe ele remove e se nao tem ele adiciona
novoParagrafo.textContent = 'Parágrafo criado via js'
titulo.style.fontSize = '4rem';
titulo.style.color = 'blue';

img.addEventListener('click', mostrarMensagem());

function mostrarMensagem(){
    console.log("Imagem clicada");
}
// img.addEventListener('click', function(){
//     console.log('Imagem clicada!')
// });

// function mostrarMensagem(){
//     console.log("Imagem clicada");
// }
link.addEventListener('click', function(event){
    event.preventDefault();
    console.log("clicado");
})
//TIPOS DE EVENTOS:
//mouse enter = quando o mouse entra na elemento

function atalhosTeclado(event) {
    if (event.key === 'a') {
      document.body.classList.toggle('azul');
    } else if (event.key === 'v') {
      document.body.classList.toggle('vermelho');
    }
  }
  
window.addEventListener('keydown', atalhosTeclado);

function exibirSrc(event) {
    console.log(event.currentTarget.getAttribute('src'));
  }
  
  imagens.forEach(img => {
    img.addEventListener('click', exibirSrc);
  });

//drag and drop
  