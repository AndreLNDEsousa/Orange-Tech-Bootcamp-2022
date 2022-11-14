/*1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por km rodado.
Crie um método que dado a quantidade de km e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso. */

// class Carro {
//     marca;
//     cor;
//     gastoMedioPorKm;

//     constructor(marca, cor, gastoMedioPorKm) {
//         this.marca = marca;
//         this.cor = cor;
//         this.gastoMedioPorKm = gastoMedioPorKm;

//     }

//     calcularGastoDePercurso(distanciaEmKm, precoCombustivel) {
//         return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
//     }

// }

// const palio = new Carro('chevrolet', 'preto', 1 / 10);

// console.log(palio.calcularGastoDePercurso(70, 5.00));



/* 2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC; */

class Pessoa {
    nome;
    peso;
    altura;
    
    constructor(nome , peso, altura ) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
               
    }

    calcularImc() {
        return this.peso / (this.altura * this.altura);
        
    } 
        
}

new Pessoa('Andre', 73, 1.69);
console.log(calcularImc().toFixed(1));