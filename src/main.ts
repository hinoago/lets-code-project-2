import { PageController } from "./controller/PageController";
import { Gerenciamento } from "./Gerenciamento";
import { Musician } from "./interface/Interface";
import { Musico } from "./model/Musico";
import { Utils } from "./utils/Utils";

const management = new Gerenciamento();

PageController.getAddButton().addEventListener("click", () =>{
    const inputEmail = PageController.getInputAddEmail();
    const inputInstruments = PageController.getInputAddInstrument();
    const inputGenres = PageController.getInputAddGenre();
    const inputName = PageController.getInputAddName();
    const userEmail = inputEmail.value;
    const name = PageController.getInputAddName().value.toLowerCase();

    if(userEmail == "" || inputName.value == "" || inputInstruments.value == "" || inputGenres.value == ""){
        Utils.createModal(`Preencha todos os campos`, "OK");
        return;
    }

    const musicians = management.getMusicians() as Array<Musician>;
    
    if(musicians){
        if(!musicians.find(musico => musico.email == userEmail)){
            const instruments = inputInstruments.value.replace(" ", "").toLowerCase().split(",");
            const genres = inputGenres.value.replace(" ", "").toLowerCase().split(",");
            const musician = new Musico(name, userEmail, genres, instruments);
            management.registerMusician(musician);
            inputEmail.value = "";
            inputName.value = "";
            inputInstruments.value = "";
            inputGenres.value = "";
            Utils.createModal(`Músico ${name} cadastrado com sucesso`, "OK");
        }else{
            Utils.createModal("Email já cadastrado", "Voltar");
        }
    }
});

PageController.getSearchButton().addEventListener("click", () =>{
    const inputEmail = PageController.getInputSearchEmail();
    const inputGenre = PageController.getInputSearchGenre();
    const inputInstrument = PageController.getInputSearchInstrument();
    const inputCheck = PageController.getInputSearchCheck();

    if(inputEmail.value == "" && inputGenre.value == "" && inputInstrument.value == ""){
        Utils.createModal("Preencha todos os campos", "OK");
        return;
    }

    const musicians = management.getMusicians() as Array<Musician>;
    if(musicians){
        if(!inputCheck.checked){
            if(inputEmail.value != ""){
                const musician = musicians.find(musician => musician.email == inputEmail.value.toLowerCase());
                if(musician){
                    const name = Utils.capitalize(musician.nome);
                    const genre = musician.generos;
                    const instrumentos = musician.instrumentos;
                    const content = `<b>Usuario<b/>: ${name}<br><b>Gêneros musicais<b/>: ${genre}<br><b>Instrumentos<b/>: ${instrumentos}`;
                    Utils.createModal(content, "OK");
                    inputEmail.value = "";
                }else{
                    Utils.createModal("Musico não encontrado", "OK");
                }
            }
    
            if(inputGenre.value != ""){
                const musiciansMatch = musicians.filter(musician => musician.generos.find(genre => genre == inputGenre.value.toLowerCase()));
    
                if(musiciansMatch.length > 0){
                    let content = "<ul>";
                    musiciansMatch.forEach(musician =>{
                        content += "<li><b>Usuario<b/>: "+ musician.nome+"<br><b>Generos<b/>: "+musician.generos+"<br><b>Instrumentos<b/>: "+musician.instrumentos+"<li/>";
                    });
                    content += "<ul/>";
                    Utils.createModal(content, "OK");
                }else{
                    Utils.createModal("Não encontrado", "OK");
                }
            }
    
            if(inputInstrument.value != ""){
                const musiciansMatch = musicians.filter(musician => musician.instrumentos.find(instrument => instrument == inputInstrument.value.toLowerCase()));
    
                if(musiciansMatch.length > 0){
                    let content = "<ul>";
                    musiciansMatch.forEach(musician =>{
                        content += "<li><b>Usuario<b/>: "+ musician.nome+"<br><b>Generos<b/>: "+musician.generos+"<br><b>Instrumentos<b/>: "+musician.instrumentos+"<li/>";
                    });
                    content += "<ul/>";
                    Utils.createModal(content, "OK");
                }else{
                    Utils.createModal("Não encontrado", "OK");
                }
            }
        }else{
            let musiciansMatch = musicians;
            if(inputEmail.value != ""){
                musiciansMatch = musiciansMatch.filter(musician => musician.email == inputEmail.value);
            }

            if(inputGenre.value != ""){
                musiciansMatch = musiciansMatch.filter(musician => musician.generos.find(genre => genre == inputGenre.value));
            }

            if(inputInstrument.value != ""){
                musiciansMatch = musiciansMatch.filter(musician => musician.instrumentos.find(instrument => instrument == inputInstrument.value));
            }

            if(musiciansMatch.length > 0){
                let content = "<ul>";
                musiciansMatch.forEach(musician =>{
                    content += "<li><b>Usuario<b/>: "+ musician.nome+"<br><b>Generos<b/>: "+musician.generos+"<br><b>Instrumentos<b/>: "+musician.instrumentos+"<li/>";
                });
                content += "<ul/>";
                Utils.createModal(content, "OK");
            }else{
                Utils.createModal("Não encontrado", "OK");
            }
        }
    }
});

PageController.getInsertButton().addEventListener("click", () =>{
    console.log("inserir");
});

PageController.getRemoveButton().addEventListener("click", () =>{
    console.log("remover");
});