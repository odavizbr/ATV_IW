let frutas = ['maçã', 'banana', 'laranja', 'uva', 'manga'];

frutas.unshift('morango');

frutas.push('abacaxi');

console.log("Segundo elemento do array:", frutas[1]);

console.log("Último elemento do array:", frutas[frutas.length - 1]);

let laran = frutas.indexOf('laranja');
console.log("Índice da 'laranja' no array:", laran);


let fm = frutas.filter(fruta => fruta.startsWith('m'));
console.log("Frutas que começam com 'm':", fm);


console.log("Todas as frutas:", frutas.join(', '));
