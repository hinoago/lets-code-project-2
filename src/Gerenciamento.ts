//cadastrar musico
//buscar musico
//modificar musico
//musico
//nome
//email
//genero musical: minimo 1
//instrumento: minimo 1

//cadastrar
//email deve ser unico

//buscar
//email, genero(apenas 1) ou instrumento(apenas 1)
//selecionar se deve bater com todas as informacoes fornecidas ou apenas uma

//modidificar
//busca por email
//permitido adicionar ou remover generos e instrumentos

import { Musico } from "./model/Musico";

class Gerenciamento{
    private musicos: Array<Musico> = [];

    getMusicos(){
        return this.musicos;
    }

    cadastrar(musico: Musico){
        if(!this.musicos.find(m => m.getEmail() == musico.getEmail())){
            this.musicos.push(musico);
        }
    }
    
    buscarPorEmail(email: string){
        return this.musicos.find(musico => musico.getEmail() == email);
    }

    buscarPorGenero(genero: string){
        const result = this.musicos.filter(musico =>{
            return musico.getGeneros().find(g => g == genero);
        });

        return result;
    }

    buscarPorInstrumento(instrumento: string){
        const result = this.musicos.filter(musico =>{
            return musico.getInstrumentos().find(i => i == instrumento);
        });

        return result;
    }
    
    adicionarGenero(email: string, genero: string){
        const usuario = this.musicos.find(musico => musico.getEmail() == email);
        if(usuario){
            usuario.setGeneros(genero);
        }
    }

    removerGenero(email: string, genero: string){
        const usuario = this.musicos.find(musico => musico.getEmail() == email);
        if(usuario && usuario.getGeneros().find(g => g == genero)){
            usuario.unsetGeneros(genero);
        }
    }

    adicionarInstrumento(email: string, instrumento: string){
        const usuario = this.musicos.find(musico => musico.getEmail() == email);
        if(usuario){
            usuario.setInstrumentos(instrumento);
        }
    }

    removerInstrumento(email: string, instrumento: string){
        const usuario = this.musicos.find(musico => musico.getEmail() == email);
        if(usuario && usuario.getInstrumentos().find(i => i == instrumento)){
            usuario.unsetInstrumentos(instrumento);
        }
    }
}

export {Gerenciamento}