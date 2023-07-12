class Conta {
    protected agencia: string;
    protected contaCorrente: string;

    constructor() {
        this.agencia = "Banco 09";
        this.contaCorrente = "CONTA_001";
    }
}

class PessoaFisica extends Conta {
    protected NomeCliente: string;
    protected cpf: string;

    constructor() {
        super();
        this.NomeCliente = "Marco";
        this.cpf = "093.805.564-77";
    }

    exibirDados(): void {
        let dados = `Agencia: ${this.agencia}`;
        dados += `Conta: ${this.contaCorrente}`;
        dados += `Nome do cliente: ${this.NomeCliente}`;
        dados += `CPF: ${this.cpf}`;

        alert(dados);
    }
}

class PessoaJuridica extends Conta {
    protected nomeEmpresa: string;
    protected cnpj: string;

    constructor() {
        super();
        this.nomeEmpresa = "Apex";
        this.cnpj = "45.678/0001"
    }
    
    exibirDados(): void {
        let dados = `Agencia: ${this.agencia}`;
        dados += `Conta: ${this.contaCorrente}`;
        dados += `Nome da empresa: ${this.nomeEmpresa}`;
        dados += `CNPJ: ${this.cnpj}`;

        alert(dados);
    }
}