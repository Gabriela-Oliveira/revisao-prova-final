/*

Exemplos de criação de objetos compostos.

var pizza = {
    sabores:['Portuguesa', 'Marguerita'],
    tamanho:'G',
    valor: 60.0,
    bordaRecheada: true,
    complementos:['Ketchup', 'Mostarda']
};

var pedido ={
    cliente: 'Vitor Freitas',
    formaPagamento: 'Dinheiro',
    endereco: 'Rua das pamonhas, n° 56, Campo Grande',
    complemento: 'Casa 3',
    taxaDeEntrega: 4.00,
    telefone: '(21) 99999-9999',
    pizza: pizza
};

*/

/*
Tipos de loops for

var listaNomes = ['Vitor','Bianca','Evodio'];

// é um for convencional.
// for(var i = 0; i < listaNomes.length; i++){

//     document.write(listaNomes[i] + '<br>');
// }


// Semelhante ao for, imprime o valor de cada interação.
// for(var nome of listaNomes){
//     document.write(nome + '<br>');
// }   

// Ele é executado retornando a posição do valor, e não o valor.
// for(var indice in listaNomes){
//     document.write(indice + '<br>');
//     document.write(listaNomes[indice] + '<br>');
// }   

*/

/*
 */

//  Função void sem parametros.
//  function mostrarAlerta(){
//     alert('oi!!!!');
//  }
// mostrarAlerta();

// é uma função que recebe parametro e não tem retorno, ou seja é void.
// function mostrarAlerta2(mensagem){
//     alert(mensagem);
// }

// mostrarAlerta2('Ola crianças!!!!');


// Função com parametros e retorno.
function retornarSeParOuImpar(numero){
    return (numero % 2 != 0) ? 'Impar' : 'Par';
}

// alert(retornarSeParOuImpar(8));


// function retornarMaiorNumero(numero1, numero2){
//     return (numero1 > numero2) ? numero1 : numero2;
// }

// alert( retornarMaiorNumero(9, 7) )

/* 
function verificarNumber(){

    var numero = document.getElementById('my-number').value;

    alert(retornarSeParOuImpar(numero));
}
*/













