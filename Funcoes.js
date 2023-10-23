import { Heroi } from "./heroi";
function criaHeroi(){
    let quantidadeHeroi = parseInt(prompt("digite a quantidade de herois"));
    while(quantidadeHeroi>0){
        quantidadeHeroi--;
        let nome = prompt("Digite um nome");
        let idade = parseInt(prompt("Digite uma idade"));
        let tipo = prompt("digite um tipo");
        console.log(nome + " " +idade + " " + tipo);
        let heroi = new Heroi(nome, idade, tipo);
        console.log(heroi.nome + " " +heroi.idade + " " + heroi.tipo);
        heroi.ataque(heroi);
    }
}
criaHeroi();