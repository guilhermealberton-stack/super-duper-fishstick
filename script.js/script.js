
// BOTÃO TOPO
let topo = document.getElementById("topo");

window.addEventListener("scroll", () => {
if(window.scrollY > 300){
topo.style.display = "block";
}else{
topo.style.display = "none";
}
});

topo.addEventListener("click", () => {
window.scrollTo({top:0, behavior:"smooth"});
});

// DARK MODE
document.getElementById("darkMode").onclick = () => {
document.body.classList.toggle("dark");
};

// BOTÃO
document.getElementById("btn").onclick = () => {
alert("Bem-vindo ao AgroPecuária Brasil!");
};

// PESQUISA
document.getElementById("buscar").addEventListener("keyup", function(){
let valor = this.value.toLowerCase();
document.querySelectorAll(".card").forEach(card => {
card.style.display = card.innerText.toLowerCase().includes(valor) ? "block" : "none";
});
});

// CONTADOR
let counters = document.querySelectorAll(".contador");

counters.forEach(counter => {
let update = () => {
let target = +counter.getAttribute("data-target");
let count = +counter.innerText;

let inc = target / 100;

if(count < target){
counter.innerText = Math.ceil(count + inc);
setTimeout(update, 30);
}else{
counter.innerText = target;
}
};
update();
});