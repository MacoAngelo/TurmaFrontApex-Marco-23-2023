class Centralizacao {
    animais: Array<AnimalTerrestre>;

    constructor() {
        this.animais = [];
        this.animais.push(new Leao());
        this.animais.push(new Cobra());
        this.animais.push(new Leao());
        this.animais.push(new Cobra());
        this.animais.push(new Leao());
        this.animais.push(new Cobra());
    }

    colocaOsBixoPraAndar(): void {
        for (let bixo of this.animais) {
            bixo.locomover();
        }
    }
}


abstract class Animal {
    nome: string;

    // Criando um método obrigatório. Toda e quaquer classe abaixo, terá que implementa-lo.
    abstract alimentar(): void;
}

// Classes abstratas não recebem a obrigatoriedade, pq tbm são utilizadas de base.
abstract class AnimalTerrestre extends Animal {
    locomover(): void {
        alert(`O animal ${this.nome} começou a andar.`);
        alert(`O animal ${this.nome} parou de andar.`);
    }
}

class Leao extends AnimalTerrestre {
    constructor() {
        super();
        this.nome = "Leão";
    }

    // implementação obrigatória.
    alimentar(): void {
        alert("Caçar e comer bixo.");
    }
}

class Cobra extends AnimalTerrestre {
    constructor() {
        super();
        this.nome = "Cobra";
    }

    // Implementação obrigatória.
    alimentar(): void {
        alert("Come um sapo.");
    }

    // Virtualização do método. Sobrescrita a classe base.
    locomover(): void {
        alert(`O animal ${this.nome} começou a rastejar.`);
        alert(`O animal ${this.nome} parou de rastejar.`);
    }
}