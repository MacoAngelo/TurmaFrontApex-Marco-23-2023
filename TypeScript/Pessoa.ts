class Pessoa {
    private nome:string;
    private idade: number;
    private cidade: string;

    constructor(nome:string, idade:number, cidade:string) {
        this.nome = nome;
        this.idade = idade;
        this.cidade = cidade;

        this.exibirDados();
    }

    private exibirDados():void {
        let mensagem = "Os dados da pessoa são: ";
        mensagem += `\n\tNome: ${this.nome}`;
        mensagem += `\n\tIdade: ${this.idade}`;
        mensagem += `\n\tCidade: ${this.cidade}`;
        mensagem += `\n\tStatus: ${this.verificarIdade()}`;

        alert(mensagem);
    }

    verificarIdade():string {
        if (this.idade < 18) {
            return "Menor de idade"
        }
        else {
            return "Maior de idade";
        }
    }
}