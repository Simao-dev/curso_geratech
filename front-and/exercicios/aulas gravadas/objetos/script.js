//let pessoa = {
   // nome: "pedro",
   // idade: 28
//}

//console.log(pessoa)
//console.log(pessoa.nome)


//pessoa.nome = "Pedro Simão"
//console.log(pessoa)

//pessoa.novaPropriedade = " novo valor"
//console.log(pessoa)

//removendo propriedade
//delete pessoa.novaPropriedade
//console.log(pessoa)

//criem um objeto vazio
let cadastro = {}
//adicionar a opropriedade nome
cadastro.nome = "pedro"
//adicionar a propriedade endereço
cadastro.endreco = "Brasil"
//adcionar a propriedade cpf
cadastro.cpf = "123.456.789-10"
//excluam a propriedade cpf
delete cadastro.cpf
//altere a propriedade nome para um nick name
cadastro.nome = "Simão"
console.log(cadastro)

let propriedade = Object.keys(cadastro)
console.log(propriedade)
console.log(propriedade.includes('cep'))