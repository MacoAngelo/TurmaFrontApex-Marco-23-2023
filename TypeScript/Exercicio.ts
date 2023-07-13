interface IPadrao {
    nome:string;
    idade:number;
    cidade:string;
    email:string;
    telefone:string;
}

abstract class Padrao implements IPadrao {
    nome: string;
    idade: number;
    cidade: string;
    email: string;
    telefone: string;

    constructor() {
        this.nome = "Marco Antonio Angelo";
        this.idade = 24;
        this.cidade = "Blumenau";
        this.email = "marco.angelo.blu@gmail.com";
        this.telefone = "(47) 99171-0879"
    }

    abstract listar():void
}

class Aluno extends Padrao {
    listar(): void {
        alert("Aluno");
    }
    nota1:number;
    nota2:number;

    constructor() {
        super();
        this.nota1 = 8;
        this.nota2 = 8;
    }
}

class Professor extends Padrao{
    listar(): void {
        alert("Professor")
    }
    materia:string;

    constructor() {
        super();
        this.materia = "Programação";
    }
}