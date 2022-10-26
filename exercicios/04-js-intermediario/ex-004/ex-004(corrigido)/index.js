const inputTextoQualquer = document.querySelectorAll("[name='texto-qualquer']")

console.log(inputTextoQualquer)

inputTextoQualquer.forEach(function(input, index){
    console.log(this)

    inputTextoQualquer[index].addEventListener('change', () =>{
        if(input.value !== ''){
            input.classList.add('campo-preenchido')
            input.classList.remove('campo-vazio')
        }else{
            input.classList.remove('campo-preenchido')
            input.classList.add('campo-vazio')
        }
    })
})
