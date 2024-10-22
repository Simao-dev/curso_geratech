class Pessoa {
    nome;
    cpf;
    data_nascimento;

    constructor(nome, cpf, data_nascimento) {
        this.nome = nome;
        this.cpf = cpf;
        this.data_nascimento = data_nascimento;
    }

    autenticacao() {
        console.log(` ${this.nome} autenticando`);
    }
}

class Gerente extends Pessoa {

    constructor(nome, cpf, data_nascimento) {
        super(nome, cpf, data_nascimento);
    }
}

const pessoa = new Pessoa('João', '0123456789', '2020/10/09');
const gerente = new Gerente('Jose', '021145440', '1996/06/09');

pessoa.autenticacao();
gerente.autenticacao();


class Carro {

    static acelerar() {
        console.log("acelerando...");
    }

    static freando() {
        console.log("freando")
    }
    static ligarSeta(direcao) {
        console.log("ligando seta para "+ direcao)
    }
}


Carro.acelerar()
Carro.freando()
Carro.ligarSeta('direita')
Carro.ligarSeta('esquerda')