const paisagens = document.querySelectorAll('.paisagem')
const infoCard = document.querySelectorAll('.info-img')
const setaAvancar = document.getElementById('btn-avancar')
const setaVoltar = document.getElementById('btn-voltar')
let paisagemAtual = 0

function esconderImagens(){
    paisagens[paisagemAtual].classList.remove('mostrar')
    infoCard[paisagemAtual].classList.remove('surgir')
}

function mostrarImagens(){
    paisagens[paisagemAtual].classList.add('mostrar')
    infoCard[paisagemAtual].classList.add('surgir')
}

setaAvancar.addEventListener('click', () =>{
    const totalDePaisagens = paisagens.length - 1

    if (paisagemAtual === totalDePaisagens) return

    esconderImagens()

    paisagemAtual++

    if(setaVoltar.classList.contains('fim')){
        setaVoltar.classList.remove('fim')
    }

    mostrarImagens()

    console.log(paisagemAtual)

    if (paisagemAtual === totalDePaisagens) setaAvancar.classList.add('fim')
})

setaVoltar.addEventListener('click', () =>{
    const paisagemInicial = paisagens.length - 4

    if (paisagemAtual === paisagemInicial) return 

    esconderImagens()

    paisagemAtual--

    if(setaAvancar.classList.contains('fim')){
        setaAvancar.classList.remove('fim')
    }

    mostrarImagens()

    console.log(paisagemAtual)

    if (paisagemAtual === paisagemInicial) setaVoltar.classList.add('fim')
})