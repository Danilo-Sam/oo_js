// Classe abstrata:
function Veiculo(modelo) {
    this.modelo = modelo;
    this.iniciar = function() {
        console.log("O carro " + this.modelo + " está ligado.");
    }
}

// Classe herdeira 1:
function Carro(modelo, cor) {
    this.cor = cor;

    Veiculo.call(this, modelo);
}

// Classe herdeira 2:
function Moto(modelo, cilindradas) {
    this.cilindradas = cilindradas;

    Veiculo.call(this, modelo);
}

// Instâncias de objetos:
const carro1 = new Carro('Civic', 'Preto');
const moto1 = new Moto('Ninja', 600);
const carro2 = new Carro('Gol', 'Prata');

// chamando o metodo:
carro1.iniciar();
moto1.iniciar();
carro2.iniciar();

// imprimindo no console:
console.log(carro1);
console.log(moto1);
console.log(carro2);
