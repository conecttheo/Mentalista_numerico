var numeroSecreto = parseInt(Math.random() * 1001);

function Chutar() {
    var elementoResultado = document.getElementById('resultado');
    var chute = parseInt(document.getElementById('valor').value);
        
   // while (chute != numeroSecreto) {

        if (chute == numeroSecreto) {
            elementoResultado.innerHTML = 
            'Acertou! Parabéns você é um gênio!! O número secreto é ' + numeroSecreto;
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
                                    
                               
    }                            







    



