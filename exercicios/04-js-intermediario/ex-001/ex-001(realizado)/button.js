botaoTrocaCor = document.getElementById('btnTrocaCor')
quadradoMutante = document.getElementById('quadrado1')



botaoTrocaCor.addEventListener('click', () =>{

    const estilo = getComputedStyle(quadradoMutante)

    console.log(estilo.backgroundColor)

    if(quadradoMutante.style.backgroundColor === 'blue'){
       quadradoMutante.style.backgroundColor = 'yellow' 
    }else {
        console.log(quadradoMutante.style)
    }

    

})