// imagens: vetor que ira armazenar os nomes das classes contendo as imagens do círculo e do xix do jogo da velha (essas classes
// estão armazenadas dentro do arquivo jogo.css)
var imagens = ['imgCircle', 'imgXis'];

// imgAtual: ira controlar qual imagem ira aparecer no tabuleiro do jogo da velha (0: circulo e 1: xis)
var imgAtual = 0;
var jogadas = 0;

// matriz: ira armazenar o status do jogo (ira conter apenas "0" e "1") em uma matriz de 3x3
var matriz;

//--------------------------------------------------------------------------------------
// matriz vai ter uma estrutura semelhante a essa após executar a função criarMatriz
// matriz = [[,,],[,,],[,,]];
function criarMatriz() {
    matriz = new Array(3);
    for (var i = 0; i < 3; i++)
        matriz[i] = new Array(3);
}

//--------------------------------------------------------------------------------------
// Objetivo: exibir um tabuleiro do jogo da velha no navegador e criar uma matriz que irá armazenar o status inicial do tabuleiro da seguinte forma:
// matriz = [["","",""],["","",""],["","",""]];
function criarTabuleiro() {
    // chama a funcao abaixo para criar a matriz com strings vazia, da seguinte forma
    // matriz = [["","",""],["","",""],["","",""]];
    criarMatriz();
    for (var l = 0; l < 3; l++)
        for (var c = 0; c < 3; c++) {
            var div = document.createElement("div");
            div.setAttribute("class", "boxTabuleiro imgTabuleiro");
            div.setAttribute("id", `${l}_${c}`);
            div.addEventListener("click", inserirImg);
            document.getElementById("tabuleiro").appendChild(div);

            // inicializacao da matriz 3x3 do jogo com string vazia em cada posicao
            matriz[l][c] = "";
        }
}
function getTextHome() {
    
    document.getElementById("txtHome").innerHTML = localStorage.getItem("nome1");
    document.getElementById("txtHome1").innerHTML = localStorage.getItem("nome2");
}

//--------------------------------------------------------------------------------------
// Inseri uma imagem (X ou 0) em cada casa do tabuleiro ao clicar sobre cada uma dela
function inserirImg(evento) {

    // Atualiza o tabuleiro no navegador com uma imagem de um 0 (circulo) ou de um X (xis)
    document.getElementById(evento.currentTarget.id).classList.add(imagens[imgAtual]);

    // Atualiza a matriz do tabuleiro contendo a representacao do tabuleiro
    // evento.currentTarget.id contém o id de cada casa do tabuleiro. Ex: "0_0" é a casa
    // linha:0 e coluna:0 do tabuleiro
    vetIndices = evento.currentTarget.id.split("_");
    // Armazena na matriz, na mesma posição que foi clicado no tabuleiro, o valor "0" (se for um circulo) ou o valor "1" (se for o Xis)
    matriz[parseInt(vetIndices[0])][parseInt(vetIndices[1])] = String(imgAtual);

    // Atualiza para a próxima imagem: 0 (circulo) e 1 (xis)
    //(imgAtual >= 1) ? imgAtual = 0 : imgAtual++;
    if (imgAtual >= 1) {
        imgAtual = 0;
        jogadas++;
 
       
    } else {
        imgAtual++;
        imgAtual = 1;
        jogadas++;
       
    }
    // Sempre que o usuário clicar sobre uma casa do tabuleiro verifica se já houve um ganhador: "000" ou "111"
    checkGanhador();

}

function checkGanhador() {
    var check = true;
    pos = new Array(8);

    //linhas
    pos[0] = matriz[0][0] + matriz[0][1] + matriz[0][2];
    pos[1] = matriz[1][0] + matriz[1][1] + matriz[1][2];
    pos[2] = matriz[2][0] + matriz[2][1] + matriz[2][2];
    //colunas
    pos[3] = matriz[0][0] + matriz[1][0] + matriz[2][0];
    pos[4] = matriz[0][1] + matriz[1][1] + matriz[2][1];
    pos[5] = matriz[0][2] + matriz[1][2] + matriz[2][2];
    //diagonal
    pos[6] = matriz[0][0] + matriz[1][1] + matriz[2][2];
    pos[7] = matriz[0][2] + matriz[1][1] + matriz[2][0];


    for (var j = 0; j < pos.length; j++) {
        if (pos[j] == "000") {
            alertWifi("Parabéns !!! Jogador 1 venceu!!");
            check = false;
            
        } else if (pos[j] == "111") {
            alertWifi("Parabéns !!! Jogador 2 venceu!!");
            check = false;
          
        }
    }

    if (jogadas == 9 && check == true) {
        alertWifi("Shiii!!! Deu velha!!");
    }
}

function reset() {
    window.location.reload();
}
