var numeroSecreto = parseInt(Math.random() * 1001);
    while (chute != numeroSecreto) {
        var chute = prompt('Digite um numero entre 0 e 1000');
        if(chute == numeroSecreto) {
            alert('Acertou! Parabéns você é um gênio!!')
        } else if (chute > numeroSecreto) {
            alert('ERROU!.. O número é menor')
        } else if (chute < numeroSecreto) {
            alert('ERROU!.. O número é maior')
        }
    }



