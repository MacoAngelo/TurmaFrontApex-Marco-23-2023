// class -> Classe (Palavra reservada utilizada para cria-la)
class Carro extends Veiculo {
    // Atributos da nossa classe
    modelo:string;
    cor: string;
    ano: number;
    tetoSolar:boolean;
    // =-=-=-=-=-=-=-=-=-=-=-=-=

    // Métodos da classe
    exibirDados():void {
        let mensagem = "Os dados do veículo são: ";
        mensagem += `\n\tFabricante: ${this.fabricante}`;
        mensagem += `\n\tModelo: ${this.modelo}`;
        mensagem += `\n\tCor: ${this.cor}`;
        mensagem += `\n\tAno: ${this.ano}`;
        mensagem += `\n\tTeto Solar: ${this.tetoSolar}`;
        
        alert(mensagem);
    }
    // =-=-=-=-=-=-=-=-=-=-=-=-=
}