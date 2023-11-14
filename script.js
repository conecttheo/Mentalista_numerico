var numeroSecreto = parseInt(Math.random() * 1001);
let tentativas = 1;


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
 }


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
                else if (chute > 1000 || chute < 0  ) {
                    elementoResultado.innerHTML = 
                    'Você deve inserir um número entre 0 e 1000';
                    }
                    else if (chute > numeroSecreto) {
                        elementoResultado.innerHTML = 
                        'ERROU!.. O número é MENOR';
                            } 
                            else if (chute < numeroSecreto) {
                                elementoResultado.innerHTML = 
                                'ERROU!.. O número é MAIOR';
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
    document.getElementById('reiniciar').setAttribute('disabled', true)
}
        







    



