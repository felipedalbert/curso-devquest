let nomeUsuario = prompt('Infome seu nome: ')

while ((nomeUsuario == null) || (nomeUsuario == '')){
   nomeUsuario = prompt('Você deve informar seu nome')
}

alert('Seja bem vindo(a), ' + nomeUsuario)