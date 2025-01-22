alert ("Bem-vindo ao melhor jogo do mundo");
let numeroSecreto = 9;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto
while (chute != numeroSecreto){
    chute = prompt("Escolha um numero entre 1 e 10");
    // se o numero for igual o numero secreto
    if (chute == numeroSecreto){
        break;
    } else{
        if (chute > numeroSecreto){
            alert (`O numero secreto e menor que ${chute}`);
        } else {
            alert (`o numero secreto e maior que ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas++;
     }
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"
alert (`Parabens voce acertou o numero secreto ${numeroSecreto} com ${Tentativas} ${palavraTentativas}.`);