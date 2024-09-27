//crie um lista com 5 filmes favoritos
let  filmes = ["vingadors","homem de ferro", "capitão america","homem aranha"]

//imprima no console o terceiro filme da lista
//console.log
console.log(filmes[2])

// altere o primeiro filme da lista para "melhor filme de todos os tempos"
//alteração por index
filmes[0] = "melhor filme de todos os tempos"

//remova o segundo filme da lista 
//variavel.splice 
filmes.splice(1,1)
console.log(filmes)
//adcione um novo filme no final da lista
filmes.push("dead pool")
console.log(filmes)

