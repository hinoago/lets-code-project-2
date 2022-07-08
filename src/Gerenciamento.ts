import { StorageController } from "./controller/StorageController";
import { Musico } from "./model/Musico";

class Gerenciamento{
    private musicos: Array<Musico> = [];

    constructor(){
        if(StorageController.getStorage() == undefined){
            StorageController.createStorage();
        }
    }

    getMusicians(){
        const storage = StorageController.getStorage();
        if(storage){
            return storage;
        }

        return undefined;
    }

    registerMusician(musico: Musico){
        const musicians = StorageController.getStorage();
        if(musicians == undefined){
            return;
        }

        if(!musicians.some(musician => musician.getEmail() == musico.getEmail())){
            StorageController.setStorage(musico);
        }
    }
    
    searchByEmail(email: string){
        const musicians = StorageController.getStorage();
        if(musicians){
            return musicians.find(musician => musician.getEmail() == email);
        }

        return undefined;
    }

    searchByGenre(genero: string){
        const result = this.musicos.filter(musico =>{
            return musico.getGeneros().find(g => g == genero);
        });

        return result;
    }

    searchByInstrument(instrumento: string){
        const result = this.musicos.filter(musico =>{
            return musico.getInstrumentos().find(i => i == instrumento);
        });

        return result;
    }
    
    addGenre(email: string, genero: string){
        const usuario = this.musicos.find(musico => musico.getEmail() == email);
        if(usuario){
            usuario.setGeneros(genero);
        }
    }

    removeGenre(email: string, genero: string){
        const usuario = this.musicos.find(musico => musico.getEmail() == email);
        if(usuario && usuario.getGeneros().find(g => g == genero)){
            usuario.unsetGeneros(genero);
        }
    }

    addInstrument(email: string, instrumento: string){
        const usuario = this.musicos.find(musico => musico.getEmail() == email);
        if(usuario){
            usuario.setInstrumentos(instrumento);
        }
    }

    removeInstrument(email: string, instrumento: string){
        const usuario = this.musicos.find(musico => musico.getEmail() == email);
        if(usuario && usuario.getInstrumentos().find(i => i == instrumento)){
            usuario.unsetInstrumentos(instrumento);
        }
    }
}

export {Gerenciamento}