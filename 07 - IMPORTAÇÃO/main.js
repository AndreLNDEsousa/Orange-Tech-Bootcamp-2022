const {gets, print} = require('./funcoes_auxiliares');

const quantidadeDeAlunos = gets();
let maiorValorEncontrado = 0;
const numeroSorteados = [];

for (let i = 0; i < quantidadeDeAlunos; i++) {
    const numeroSorteado = gets();
    
    if (numeroSorteado > maiorValorEncontrado) {
        maiorValorEncontrado = numeroSorteado;
    }
    
}

print(maiorValorEncontrado);