function alterarBgPrimeiroPost(){
    let posts = document.getElementsByClassName("post");

    console.log(posts);

    let primeiroPost = posts[0];

    primeiroPost.style.backgroundColor = 'red';

}

function alterarTamanhoSegundoPost(){
    let segundoPost = document.getElementsByClassName("post")[1];

    segundoPost.classList.add('fonte-grande')
}