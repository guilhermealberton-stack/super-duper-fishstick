const botao = document.getElementById("botao");

botao.addEventListener("click", function () {

    alert("Bem-vindo ao AgroPecuária Brasil! Explore nossas notícias e conteúdos sobre o agronegócio.");

});

const cards = document.querySelectorAll(".card");

cards.forEach(function(card){

    card.addEventListener("mouseenter", function(){

        card.style.background = "#E8F5E9";

    });

    card.addEventListener("mouseleave", function(){

        card.style.background = "white";

    });

});