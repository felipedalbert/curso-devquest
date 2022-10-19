const quadrado = document.querySelector('.quadrado')

quadrado.addEventListener('click', function(item) {
    
    corDoItem = getComputedStyle(item.target)

    if(item.target.classList.contains('azul')){
        item.target.style.backgroundColor = 'blue';
        item.target.classList.remove('azul');
        alert('Esse quadrado tem AZUL')
    } else if(!item.target.classList.contains('azul')){
        item.target.style.backgroundColor = 'black';
        item.target.classList.add('azul');
    }
})