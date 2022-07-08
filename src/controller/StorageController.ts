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
        return JSON.parse(localStorage.getItem(StorageController.KEY)!) as Array<Musico>;
    }

    static setStorage(musician: Musico){
        const musicians = this.getStorage();
        musicians.push(musician);
        localStorage.setItem(StorageController.KEY , JSON.stringify(musicians));
    }
}

export {StorageController}