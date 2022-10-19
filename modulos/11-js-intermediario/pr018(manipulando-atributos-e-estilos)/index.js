function alterarBgPrimeiroPost(){
    let posts = document.getElementsByClassName("post");

    console.log(posts);

    let primeiroPost = posts[0];

    primeiroPost.style.backgroundColor = 'red';

}

function alterarTamanhoSegundoPost(){
    let textPost = document.getElementsByClassName("texto-post");

    textPost[1].classList.add('fonte-grande')

    
}

function marcarRadio(genero){
    let radioFeminino = document.getElementById('genero-feminino')

    let radioMasculino = document.getElementById('genero-masculino')

    switch(genero){
        case 'F':
            radioFeminino.checked = true
            console.log('Feminino')
            break;
        case 'M':
            radioMasculino.checked = true
            console.log('Masculino')
            break;
    }
}