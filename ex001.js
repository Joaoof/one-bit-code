function numerosInteiros(numerosInteiros) {
    let calculo = numerosInteiros / 3
    console.log(calculo)
}

numerosInteiros(10, 39)



function media(...numbers) {
   const sum = numbers.reduce((accum, num) => accum + num, 0)
   return sum / numbers.length // numbers.length pega a quantidade de numeros e faz a media
}

console.log(media(40, 59, 20, 39, 83, 10))