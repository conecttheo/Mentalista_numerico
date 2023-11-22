var numeroSecreto = parseInt(Math.random() * 11);
let tentativas = 1;


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
 }
 
//var botao = document.querySelector("confirmar"); 
//    botao.addEventListener("keypress" , function(event) {
//        if (event.key === "Enter") {
//            event.preventDefault();
//    
//            Chutar();
//        }
//    } );
 
function Chutar() {
    var elementoResultado = document.getElementById('resultado');
    var chute = parseInt(document.getElementById('valor').value);
   
        if (chute == numeroSecreto) {
            elementoResultado.innerHTML = 
            'Acertou! Parabéns você é um gênio!! O número secreto é ' + numeroSecreto;
            let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
            let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
            exibirTextoNaTela('p', mensagemTentativas);
            document.getElementById('reiniciar').removeAttribute('disabled');
                } 
                else if (chute > 10 || chute < 0  ) {
                    elementoResultado.innerHTML = 
                    'Você deve inserir um número entre 0 e 10';
                    }
                    else if (chute > numeroSecreto) {
                        elementoResultado.innerHTML = 
                        'ERROU! Não é ' + chute + '. O número secreto é MENOR';
                            } 
                            else if (chute < numeroSecreto) {
                                elementoResultado.innerHTML = 
                                'ERROU! Não é ' + chute + '. O número secreto é MAIOR';
                                    }    
                                    tentativas++;
                                    limparCampo();                                    
     
}

function limparCampo() {
    chute = document.getElementById('valor');
    chute.value = '';
}    
        
function reiniciarJogo() {
    numeroSecreto = Chutar();
    limparCampo();
    tentativas = 1;
    exibirTextoNaTela();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}
        







    



