function adicionarComentario(){
    let inputComentario = document.getElementsByName('novo-comentario')

    console.log(inputComentario)

    let textoDigitado = inputComentario[0].value

    console.log(textoDigitado)

    let divNovosComentarios = document.getElementById('novos-comentarios')

    // novosComentarios.innerHTML += `<p>Novo comentário: ${textoDigitado}<p>`


                                //innerHTML que ja existia  +   novo comentário
    // novosComentarios.innerHTML = novosComentarios.innerHTML + `<p>Novo comentário: ${textoDigitado}<p>`



    // método create element e append child

    let elementoNovoComentario = document.createElement('p');

    elementoNovoComentario.appendChild(document.createTextNode(textoDigitado))

    divNovosComentarios.appendChild(elementoNovoComentario)
}
