//Criando exceção TypeError personalizada usando o construtor TypeError e lançá-la com o operador throw

function validarNome(nome) {
    if (typeof nome !== 'string') {
      // Lança uma exceção TypeError se o nome não for uma string
      throw new TypeError('O nome deve ser uma string');
    }
    // Restante do código aqui
}

//Também é possível criar uma exceção personalizada FalhaNaConexao estendendo o construtor Error nativo

class FalhaNaConexao extends Error {
    constructor(mensagem) {
      super(mensagem);
      this.name = 'FalhaNaConexao';
    }
}

function fazerRequisicao() {
    // Simula uma falha na conexão
    throw new FalhaNaConexao('Falha na conexão com o servidor');
}

fazerRequisicao()
  
  