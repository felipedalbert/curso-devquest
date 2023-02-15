//EXEMPLO 1: função com numero variável de argumentos

function somar(...numeros) {
    return numeros.reduce((total, numero) => total + numero, 0);
}
  
console.log(somar(1, 2, 3)); // 6
console.log(somar(4, 5, 6, 7)); // 22
console.log(somar(10)); // 10

// Neste exemplo, a função somar recebe um número variável de argumentos usando o operador spread. Esses argumentos são então somados usando o método reduce, que é chamado em cima do array resultante. Dessa forma, a função pode somar qualquer quantidade de números passados como argumento.



//EXEMPLO 2: Funções que recebem outros argumentos além do operador spread

function concatenar(separador, ...strings) {
    return strings.join(separador);
}
  
console.log(concatenar("-", "a", "b", "c")); // "a-b-c"
console.log(concatenar(" ", "hello", "world")); // "hello world"
  
// Neste exemplo, a função concatenar recebe um separador como primeiro argumento e um número variável de strings usando o operador spread. Note que o separador é passado antes do operador spread na primeira chamada da função e depois na segunda chamada. Isso demonstra que a ordem dos argumentos é irrelevante quando se usa o operador spread.



//EXEMPLO 3: Passagem de arrays entre funções

function multiplicar(numero, ...outrosNumeros) {
    return outrosNumeros.map(n => n * numero);
}
  
const numeros = [2, 4, 6, 8];
const resultado = multiplicar(3, ...numeros);

console.log(resultado); // [6, 12, 18, 24]

// Neste exemplo, a função multiplicar recebe um número e um número variável de outros números usando o operador spread. O método map é usado para criar um novo array em que cada elemento é o resultado da multiplicação entre um dos outros números e o primeiro número passado como argumento. Em seguida, um array de números é definido e o operador spread é usado para passá-lo como argumento para a função multiplicar. O resultado é um novo array com os resultados da multiplicação.
  
