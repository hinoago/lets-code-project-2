import { PageController } from "./controller/PageController";
import { Gerenciamento } from "./Gerenciamento";
import { Musico } from "./model/Musico";
import { Utils } from "./utils/Utils";

const management = new Gerenciamento();

PageController.getAddButton().addEventListener("click", () =>{
    const inputEmail = PageController.getInputAddEmail();
    const inputInstruments = PageController.getInputAddInstrument();
    const inputGenres = PageController.getInputAddGenre();
    const inputName = PageController.getInputAddName();
    const userEmail = inputEmail.value;
    const name = PageController.getInputAddName().value;

    if(userEmail == "" || inputName.value == "" || inputInstruments.value == "" || inputGenres.value == ""){
        Utils.createModal(`Preencha todos os campos`, "OK");
        return;
    }

    const musicians = management.getMusicians();
    
    if(musicians){
        if(!musicians.find(musico => musico.getEmail() == userEmail)){
            const instruments = inputInstruments.value.trim().split(",");
            const genres = inputGenres.value.trim().split(",");
            const musician = new Musico(name, userEmail, genres, instruments);
            management.registerMusician(musician);
            inputEmail.value = "";
            inputName.value = "";
            inputInstruments.value = "";
            inputGenres.value = "";
            Utils.createModal(`Músico ${name} cadastrado com sucesso`, "OK");
        }
    }
});

PageController.getSearchButton().addEventListener("click", () =>{
    console.log("buscar");
});

PageController.getInsertButton().addEventListener("click", () =>{
    console.log("inserir");
});

PageController.getRemoveButton().addEventListener("click", () =>{
    console.log("remover");
});