const quadrado = document.querySelector('.quadrado')

// quadrado.classList.add('azul');

// quadrado.addEventListener('click', function(item) {

//     if(item.target.classList.contains('azul')){
//         item.target.style.backgroundColor = 'blue'
//         alert('Esse quadrado tem AZUL')
//         item.target.classList.remove('azul')
//     } else if(!item.target.classList.contains('azul')){
//         item.target.style.backgroundColor = 'black';
//         item.target.classList.add('azul');
//     }
// })

quadrado.addEventListener('click', event =>{

    if(event.target.classList.contains('azul')){
        event.target.classList.remove('azul');
    }else{
        event.target.classList.add('azul');
        alert('Esse quadrado tem a classe azul')
    }
})