debugger
console.log(pais) // retorna undefinied como valor padrão
var pais = 'Brasil'


// console.log(estado) //retorna erro de referencia
// let estado = 'parana'


console.log(teste)
if(2 == 2){
    var teste = 123;
    
}else{
    console.log('teste')
}


console.log(meuNome())

function meuNome() {
  return 'Felipe'
} 


function getValor(){
  var retornaValor = function(){
    return 1;
  }

  
  return retornaValor();
  
  var retornaValor = function(){
    return 2;
  }
}

var resultado = getValor();
console.log(resultado);