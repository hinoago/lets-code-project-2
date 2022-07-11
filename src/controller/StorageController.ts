import { Musician } from "../interface/Interface";
import { Musico } from "../model/Musico";

class StorageController{
    private static KEY = "@lc_project_musician";
    private constructor(){}

    static createStorage(){
        const storage = localStorage.getItem(StorageController.KEY);
        if(!storage){
            localStorage.setItem(this.KEY, "[]");
        }
    }

    static getStorage(){
        const storage = localStorage.getItem(StorageController.KEY);
        if(storage){
            return JSON.parse(storage);
        }

        return undefined;
    }

    static setStorage(musician: Musico){
        const musicians = this.getStorage() as Array<Musico>;
        if(musicians){
            musicians.push(musician);
            localStorage.setItem(StorageController.KEY , JSON.stringify(musicians));
        }
    }

    static changeStorage(musicians: Array<Musician>){
        localStorage.setItem(StorageController.KEY , JSON.stringify(musicians));
    }
}

export {StorageController}