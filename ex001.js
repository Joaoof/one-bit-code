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
