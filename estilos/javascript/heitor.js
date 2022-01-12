
function f (text, optionA, optionB) {
    var escolha = prompt(text).toUpperCase();

    if(escolha === "1"){
        window.location.href = `./${optionA}`;
    } else if (escolha === "2"){
        window.location.href = `./${optionB}`;
    } else {
        alert("Por favor se atenha as opções propostas");
        window.location.reload();
    }
}

function gameOver() {
    alert("Você Perdeu! Voltando para o ponto de partida.");
    window.location.href = "../../index.html"
}

function vGameOver() {
    alert("Parabéns você venceu! Voltando para casa como heroi!.")
    window.location.href = "../../index.html"
}