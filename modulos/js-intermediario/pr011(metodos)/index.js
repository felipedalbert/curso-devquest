let usuario = {
    nome: 'João',
    excluir: function(){
        console.log(`O usuário '${this.nome}' foi excluído!`);
    }
}

usuario.excluir()