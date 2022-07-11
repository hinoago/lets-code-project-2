import { StorageController } from "./controller/StorageController";
import { Musician } from "./interface/Interface";
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
        const musicians = StorageController.getStorage() as Array<Musician>;
        if(musicians == undefined){
            return;
        }

        if(!musicians.some(musician => musician.email == musico.getEmail())){
            StorageController.setStorage(musico);
        }
    }
    
    searchByEmail(email: string){
        const musicians = StorageController.getStorage() as Array<Musician>;
        if(musicians){
            return musicians.find(musician => musician.email == email);
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

    addGenre(email:string, genero: string){
        const musicians = StorageController.getStorage() as Array<Musician>;
        const musician = musicians.find(mus => mus.email == email);

        if(musician){
            musician.generos.push(genero);
            musicians.splice(musicians.indexOf(musician), 1);
            musicians.push(musician);
            StorageController.changeStorage(musicians);
        }
    }

    addInstrument(email:string, instrumento: string){
        const musicians = StorageController.getStorage() as Array<Musician>;
        const musician = musicians.find(mus => mus.email == email);

        if(musician){
            musician.instrumentos.push(instrumento);
            musicians.splice(musicians.indexOf(musician), 1);
            musicians.push(musician);
            StorageController.changeStorage(musicians);
        }
    }

    removeGenre(email: string, genre: string){
        const musicians = StorageController.getStorage() as Array<Musician>;
        const musician = musicians.find(m => m.email == email);
        if(musician){
            musicians.splice(musicians.indexOf(musician), 1);
            musician.generos.splice(musician.generos.indexOf(genre), 1);
            musicians.push(musician);
            StorageController.changeStorage(musicians);
        }
    }

    removeInstrument(email: string, instrument: string){
        const musicians = StorageController.getStorage() as Array<Musician>;
        const musician = musicians.find(m => m.email == email);
        if(musician){
            musicians.splice(musicians.indexOf(musician), 1);
            musician.instrumentos.splice(musician.instrumentos.indexOf(instrument), 1);
            musicians.push(musician);
            StorageController.changeStorage(musicians);
        }
    }
}

export {Gerenciamento}