function imprimirUsuario({ nome, idade }) {
    console.log(`Nome: ${nome}, Idade: ${idade}`);
}
  
const usuario = { nome: "Maria", idade: 25 };
imprimirUsuario(usuario); // "Nome: Maria, Idade: 25"


const numeros = [1, 2, 3, 4, 5];
const [primeiro, segundo, ...resto] = numeros;

console.log(primeiro); // 1
console.log(segundo); // 2
console.log(resto); // [3, 4, 5]
