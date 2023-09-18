// MINHA RESOLUÇÃO

function Chunk(string) {
  let result = (string + '-').repeat(4)  // repete-se 4 vezes, e ao final de cada string adiciona '-'// split separa a string 'chunk-chunk' por letra 'c', 'h', 'u' .... etc e join junta esse caracteres individuas no array, ficando 'chunk-chunk'
  console.log(result)
}

Chunk('chunk')

// RESOLUÇÃO DA ONE-BIT-CODE

function chunks(num) {
    if (num == 0) {
        return 'nada'
    }

    if (num === 1) {
        return 'alo'
    } else {
        return 'hello-' + chunks(num -1)
    }
}

console.log(chunks(5))


// fatorial
function fatorial(v) {
    if (v == 0) {
       return 1
    } else {
        return v * fatorial(v-1)
    }
}
console.log("passou",fatorial(5))