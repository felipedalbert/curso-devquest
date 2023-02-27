async function buscarUsuario(id) {
    const resposta = await fetch(`https://exemplo.com/api/usuarios/${id}`); // espera o resolve da API para dar a resposta
    const dados = await resposta.json(); //Aguarda a transformação da resposta em um formato JSON e armazena na const dados
    return dados; // retorna dados
}

async function main() {
    try {
      const dadosUsuario = await buscarUsuario(123); //busca o usuário 123
      console.log(dadosUsuario); // imprime dados do usuário em formato JSON
    } catch (erro) { // captura um erro caso o ID seja inexistente
      console.error(erro); //printa o erro
    }
}
  
main();
  
  