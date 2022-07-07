import { Gerenciamento } from "./Gerenciamento";
import { Musico } from "./model/Musico";

const gerenciamento = new Gerenciamento();

const generos = ["power metal", "neoclassic metal"];
const instrumentos = ["guitarra", "teclado"];

const musico = new Musico("Gabriel", "hinoago@gmail.com", generos, instrumentos);
gerenciamento.cadastrar(musico);
console.log(gerenciamento.getMusicos());

gerenciamento.adicionarInstrumento("hinoago@gmail.com", "tin whistle");
console.log(gerenciamento.getMusicos());