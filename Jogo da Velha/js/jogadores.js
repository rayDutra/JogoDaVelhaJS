function validateJogadores(){
    jogador1 = document.getElementById("jogador1");
    localStorage.setItem("nome1", jogador1.value);

    jogador2 = document.getElementById("jogador2");
    localStorage.setItem("nome2", jogador2.value);

    if(!jogador1.value) 
    alertWifi(`Jogador 1 em branco. Informe um jogador!`);
    else if 
    (!jogador2.value) alertWifi(`Jogador 2 em branco. Informe um jogador!`);
    else {
        window.location.href = "index.html"
    }
}
