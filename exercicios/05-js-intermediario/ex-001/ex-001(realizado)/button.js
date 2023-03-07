let botaoTrocaCor = document.getElementById('btnTrocaCor')
let quadradoMutante = document.getElementById('quadrado1')

console.log(getComputedStyle(quadradoMutante).backgroundColor)

botaoTrocaCor.addEventListener('click', () =>{

    const estiloDoQuadradoMutante = getComputedStyle(quadradoMutante)

    if(estiloDoQuadradoMutante.backgroundColor === 'rgb(0, 0, 255)'){
        quadradoMutante.style.backgroundColor = 'yellow';
    }else{
        quadradoMutante.style.backgroundColor = 'blue';
    }
})

