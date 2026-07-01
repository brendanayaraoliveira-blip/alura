// Mensagem de boas-vindas
window.addEventListener("load", () => {
    console.log("Bem-vindo ao Brenda Tech!");
});

// Botão Explorar
const botao = document.querySelector("button");

botao.addEventListener("click", () => {
    document.getElementById("noticias").scrollIntoView({
        behavior: "smooth"
    });
});

// Animação dos cards ao aparecer na tela
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("mostrar");
        }
    });
});

cards.forEach(card => observer.observe(card));

// Saudação conforme o horário
const hora = new Date().getHours();

if (hora < 12) {
    console.log("Bom dia! ☀️");
} else if (hora < 18) {
    console.log("Boa tarde! 🌤️");
} else {
    console.log("Boa noite! 🌙");
}

// Pesquisa simples de artigos
const pesquisa = document.getElementById("pesquisa");

if (pesquisa) {
    pesquisa.addEventListener("keyup", () => {

        const texto = pesquisa.value.toLowerCase();

        cards.forEach(card => {

            const conteudo = card.textContent.toLowerCase();

            if (conteudo.includes(texto)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });
}

// Efeito ao passar o mouse
cards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.03)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
    });

});

// Botão voltar ao topo
const voltarTopo = document.createElement("button");

voltarTopo.innerHTML = "⬆";
voltarTopo.id = "topo";

document.body.appendChild(voltarTopo);

voltarTopo.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        voltarTopo.style.display = "block";
    } else {
        voltarTopo.style.display = "none";
    }

});
