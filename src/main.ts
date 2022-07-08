import { PageController } from "./controller/PageController";
import { Gerenciamento } from "./Gerenciamento";
import { Musico } from "./model/Musico";

const gerenciamento = new Gerenciamento();

const generos = ["rock", "metal"];
const instrumentos = ["bateria", "guitarra"];

const musico = new Musico("Fulano", "fulano@ru.co", generos, instrumentos);
gerenciamento.cadastrar(musico);
console.log(gerenciamento.getMusicos());

PageController.getAddButton().addEventListener("click", () =>{
    console.log("cadastrar");
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