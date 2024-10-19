let modo = prompt("Digite um modo: dark, red ou blue:");
switch (modo) {
    case "dark":
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        break;
        //muda a cor da pagina e a letra para preto caso o valor digitado seja black
    case "red":
        document.body.style.backgroundColor = "red";
        document.body.style.color = "white";
        break;
         //muda a cor da pagina e a letra para vermelho caso o valor digitado seja red
    case "blue":
        document.body.style.backgroundColor = "blue";
        document.body.style.color = "white";
        break;
         //muda a cor da pagina e a letra para azul caso o valor digitado seja blue
    default:
        document.body.style.backgroundColor = "pink";
        document.body.style.color = "black";
        //se a opção informada não for encontrada em nenhum dos casos ele aplica a cor padrão fundo rosa
}