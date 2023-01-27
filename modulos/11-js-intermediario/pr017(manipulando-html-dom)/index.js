function adicionarComentario(){
    let inputComentario = document.getElementsByName('novo-comentario')

    console.log(inputComentario)

    let textoDigitado = inputComentario[0].value

    console.log(textoDigitado)

    let novosComentarios = document.getElementById('novos-comentarios')

    // novosComentarios.innerHTML += `<p>Novo comentário: ${textoDigitado}<p>`

    // ou

                                //innerHTML que ja existia  +   novo comentário
    novosComentarios.innerHTML = novosComentarios.innerHTML + `<p>Novo comentário: ${textoDigitado}<p>`
}
