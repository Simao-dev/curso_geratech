//classes

class Pessoa {
    //atributos
    nome = '';
    cpf = '';
     idade = '';
   

    constructor (nome, cpf, idade) {
        this.nome = nome;
        this.cpf = cpf;
        this.idade = idade;
    }
    // eventos - metodos de classes
    
    correr() {
        console.log (`O ${this.nome} está correndo...`);
    }

    dormir(){
        console.log(`o ${this.nome} está dormindo...`)
    }
}


const pessoaClasse1 = new Pessoa("jose", "12345678910", 12);
const pessoaClasse2 = new Pessoa("maria", "12345678910", 13);


pessoaClasse1.nome = 'João';

//pessoaClasse01 = x01937495;
const pessoaAux = pessoaClasse1;

//pessoaAux = x01937495;
pessoaAux.nome = 'Alice'
