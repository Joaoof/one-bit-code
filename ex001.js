function numerosInteiros(numerosInteiros) {
    let calculo = numerosInteiros / 3
    console.log(calculo)
}

numerosInteiros(10, 39)



function media(...numbers) {
   const sum = numbers.reduce((accum, num) => accum + num, 0)
   return sum / numbers.length // numbers.length pega a quantidade de numeros e faz a media
}

console.log(media(40, 10))

// const stringOriginal = 'Luizin ';
// const repeticoes = 10; // Número de vezes que queremos repetir a string

// const stringRepetida = stringOriginal.repeat(repeticoes)

// console.log(stringRepetida) // Isso imprimirá 'Luis é corno. Luis é corno. Luis é corno. Luis


var numeros = [1, 2, 3, 4, 5, 6, 7,8, 9, 10,11]; // como se estivessem somando os numeros 1 + 2 + 3.... e assim por diante
var total = numeros.reduce((total, numero) => total + numero, 0);
console.log(total);

var numeroL = [6, 4, 10, 4]
var totalL = numeroL.reduce((totalL, numeroL) => totalL + numeroL, 0)
console.log(totalL)

switch(totalL) {
    case 24:
         console.log('Ok')
    break

    case 30:
        console.log('OK....');
    break

    default:
        console.log('valor genérico');
}