// localStorage.clear();
const nome = prompt("Digite o seu nome");
localStorage.setItem("nome", nome);

alert(`Olá, ${localStorage.getItem("nome")}`);

let visitCount = localStorage.getItem("visitCount");
        if (!visitCount) {
            visitCount = 0;
        }
visitCount++;
localStorage.setItem("visitCount", visitCount);
document.getElementById("visit-count").textContent = `Você visitou esta página ${visitCount} vez(es).`;

    const darkButton = document.getElementById("dark");
    const lightButton = document.getElementById("light");
    const body = document.body;

    function alterarTemaDark() {
        body.classList.add("dark-mode");
        localStorage.setItem("tema", "dark");
    }

    function alterarTemaLight() {
        body.classList.remove("dark-mode");
        localStorage.setItem("tema", "light");
    }

    const temaSalvo = localStorage.getItem("tema");
    if(temaSalvo == "dark"){
        body.classList.add("dark-mode");
    }else if(temaSalvo == "light"){
        body.classList.remove("dark-mode");
    }

    // Adicionar eventos de clique aos botões
    darkButton.addEventListener("click", alterarTemaDark);
    lightButton.addEventListener("click", alterarTemaLight);




