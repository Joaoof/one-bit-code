function Chunk(string) {
  let result = (string + '-').repeat(4)  // repete-se 4 vezes, e ao final de cada string adiciona '-'// split separa a string 'chunk-chunk' por letra 'c', 'h', 'u' .... etc e join junta esse caracteres individuas no array, ficando 'chunk-chunk'
  console.log(result)
}

Chunk('chunk')