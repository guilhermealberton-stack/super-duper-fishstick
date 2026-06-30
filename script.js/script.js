
// ===== BOTÃO TOPO =====
const btnTopo = document.getElementById("topo");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        btnTopo.style.display = "block";
    } else {
        btnTopo.style.display = "none";
    }
});

btnTopo.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// ===== DARK MODE =====
const darkBtn = document.getElementById("darkMode");

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});


// ===== BOTÃO SAIBA MAIS =====
const saibaMais = document.getElementById("saibaMais");

saibaMais.addEventListener("click", () => {
    alert("Bem-vindo ao AgroPecuária Brasil! Explore nossas notícias sobre o agronegócio.");
});


// ===== PESQUISA SIMPLES =====
const input = document.getElementById("buscar");
const cards = document.querySelectorAll(".card");

input.addEventListener("keyup", () => {
    let valor = input.value.toLowerCase();

    cards.forEach(card => {
        let texto = card.innerText.toLowerCase();

        if (texto.includes(valor)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});


// ===== CONTADOR ANIMADO =====
const contadores = document.querySelectorAll(".contador");

const animarContador = () => {
    contadores.forEach(contador => {
        let valorFinal = +contador.getAttribute("data-target");
        let atual = 0;

        let intervalo = setInterval(() => {
            atual += Math.ceil(valorFinal / 100);

            if (atual >= valorFinal) {
                contador.innerText = valorFinal;
                clearInterval(intervalo);
            } else {
                contador.innerText = atual;
            }
        }, 30);
    });
};


// inicia quando aparece na tela
window.addEventListener("scroll", () => {
    const secao = document.getElementById("estatisticas");

    const posicao = secao.getBoundingClientRect().top;

    if (posicao < window.innerHeight) {
        animarContador();
    }
});


// ===== SCROLL SUAVE PARA LINKS =====
document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        let alvo = document.querySelector(this.getAttribute("href"));

        if (alvo) {
            alvo.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});