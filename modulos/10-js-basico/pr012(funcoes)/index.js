function testeFuncao(){
    console.log('Testando função sem parametro')
}

testeFuncao();

function sdfsdftwe(n1, n2){
    console.log(n1 + n2)
}

soma(4, 5);

function retornaValor(n1, n2){
    return n1 + n2
}

console.log(retornaValor(2, 8));

resultadoDaSomaReturn = retornaValor(8, 8);

console.log(resultadoDaSomaReturn);

resultadoDaSomaReturn = retornaValor(resultadoDaSomaReturn, 2);

console.log(resultadoDaSomaReturn);


function incetivarQuester(nomeQuester = 'Quester'){
    console.log('Muito bem ' + nomeQuester + ', você chegou ao JS, continue assim, continue!');
}

incetivarQuester('Daniel');