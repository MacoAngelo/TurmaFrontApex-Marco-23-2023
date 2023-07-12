interface IRegistro {
    id:number;

    salvar():void;
    abrir():IRegistro;
    apagar():void;
    editar():void;
}

class Livro implements IRegistro {
    id: number;
    
    salvar(): void {
        throw new Error("Method not implemented.");
    }
    abrir(): IRegistro {
        throw new Error("Method not implemented.");
    }
    apagar(): void {
        throw new Error("Method not implemented.");
    }
    editar(): void {
        throw new Error("Method not implemented.");
    }

}