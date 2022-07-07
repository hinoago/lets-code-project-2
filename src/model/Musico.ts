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

    setGeneros(genero: string){
        this.generos.push(genero);
    }

    setInstrumentos(instrumento: string){
        this.instrumentos.push(instrumento);
    }

    unsetGeneros(genero: string){
        const match = this.generos.find(g => g == genero);
        if(match){
            this.generos.splice(this.generos.indexOf(match), 1);
        }
    }

    unsetInstrumentos(instrumento: string){
        const match = this.generos.find(i => i == instrumento);
        if(match){
            this.instrumentos.splice(this.instrumentos.indexOf(match), 1);
        }
    }
}

export {Musico}