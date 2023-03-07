let botaoTrocaCor = document.getElementById('btnTrocaCor')
let quadradoMutante = document.getElementById('quadrado1')

botaoTrocaCor.addEventListener('click', trocaCor)

function trocaCor() {
    quadradoMutante.classList.remove('azul')
    quadradoMutante.classList.add('amarelo')
}