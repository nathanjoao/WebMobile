const dropzone = document.querySelector('.dropzone');
const originalContainer = document.querySelector('.original-container');
const draggables = document.querySelectorAll('.draggable');
const images = document.querySelectorAll('img');

// Definindo atributos das imagens
document.getElementById('java').setAttribute('src', 'java.png');
document.getElementById('java').setAttribute('alt', 'Java');
document.getElementById('futebol').setAttribute('src', 'futebol.jpg');
document.getElementById('futebol').setAttribute('alt', 'Futebol');

// Estilizando as imagens
images.forEach((img) => {
    img.style.width = '15rem';
    img.style.borderRadius = '10px';
    img.style.height = '10rem';
});

// Função para permitir o drop em um contêiner
function allowDrop(event) {
    event.preventDefault();
}

// Função para lidar com o drop
function handleDrop(event) {
    event.preventDefault();
    const draggableId = event.dataTransfer.getData('text/plain');
    const draggableElement = document.getElementById(draggableId);
    
    if (draggableElement) {
        event.target.appendChild(draggableElement);
        console.log('Elemento movido');
    } else {
        console.error('Elemento não encontrado para o ID:', draggableId);
    }
}

// Função para remover a imagem da área de favoritos e retornar à galeria
function removeImage(event) {
    const draggableElement = event.target.closest('.draggable');
    if (draggableElement) {
        originalContainer.appendChild(draggableElement);
        console.log('Imagem retornada à galeria');
    } else {
        console.error('Elemento não encontrado ao tentar retornar à galeria');
    }
}

// Adicionando eventos para os elementos arrastáveis
draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text/plain', draggable.id);
        draggable.classList.add('dragging'); // Adiciona uma classe de estilo enquanto arrasta
        console.log('Drag iniciado para', draggable.id);
    });

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging');
        console.log('Drag finalizado');
    });

    // Adicionando evento de clique para retornar a imagem à galeria
    draggable.querySelector('img').addEventListener('click', (event) => {
        if (event.target.closest('.dropzone')) {
            removeImage(event);
        }
    });
});

// Adicionando eventos para permitir drop nos contêineres
dropzone.addEventListener('dragover', allowDrop);
dropzone.addEventListener('drop', handleDrop);

originalContainer.addEventListener('dragover', allowDrop);
originalContainer.addEventListener('drop', handleDrop);