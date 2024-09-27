//funções sem paramentros
function minhaFuncao(){
    console.log("minha função foi execultada")
}

//inovação de função

minhaFuncao()
console.log(minhaFuncao())

//função com retorno

function funcaoComRetorno(){
    return "retorno da minha função generica"
}

//função com argumentos

function funcaoComArgumentos(numero1,numero2){
    console.log("primeiro argumento:" + numero1 + "composto com a concatenção o +")
    console.log(`segundo argumento: ${numero2} composto com a concatenação com template string`)
    return numero1 + numero2
    //depois do retorno da função, o console.log não pode ser execultado
    //qualquer linha abaixo do return, é ignorada
    console.log("a função passoi aqui")
}
let  soma1 = funcaoComArgumentos(10,20)
console.log(soma1)
//atividade
//crie uma função que recebe um objeto como paramentro
//e retorne o valor das propriedades formatadas em texto
function retornaObjetoFornatado(objetoProduto){
    return(`nome: ${objetoProduto.nome} - preço: ${objetoProduto.preco} - quantidade: ${objetoProduto.quantidade}`)
}

let produto1 = {
    nome: 'teclado',
    preco: 100,
    quantidade: 10
}
//use oo retorno da função criada no console para mostrar o resultado
console.log(retornaObjetoFornatado(produto1))
console.log(produto1)
let produto1JSON = JSON.stringify(produto1)
console.log(produto1JSON)

