export class Heroi{

    constructor(nome,idade,tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    ataque(){
        if(this.tipo === "mago"){
            console.log(`O ${this.tipo} atacou usando magia`);
        }else if(this.tipo ==="ninja"){
            console.log(`O ${this.tipo} atacou usando shuriken`);
        }else if(this.tipo === "guerreiro"){
            console.log(`O ${this.tipo} atacou usando espada`);
        }else{
            console.log(`O ${this.tipo} atacou usando artes marciais`);
        }
        
    }
}


