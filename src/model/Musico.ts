class Musico{
    private nome: string;
    private email: string;
    private generos: Array<string>
    private instrumentos: Array<string>

    constructor(nome: string, email: string, generos: Array<string>, instrumentos: Array<string>){
        this.nome = nome;
        this.email = email;
        this.generos = generos;
        this.instrumentos = instrumentos;
    }

    getNome(): string{
        return this.nome;
    }

    getEmail(): string{
        return this.email;
    }

    getGeneros(): Array<string>{
        return this.generos;
    }

    getInstrumentos(): Array<string>{
        return this.instrumentos;
    }
}

export {Musico}