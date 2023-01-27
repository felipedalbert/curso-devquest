const contentBox = document.querySelectorAll('.content-box')

contentBox.forEach(item =>{
    item.addEventListener('click', () =>{
        const arrow = item.querySelector('.icon')

        item.classList.toggle('active')
        
        const isActive = item.classList.contains('active')

        if(isActive){
            arrow.setAttribute('src','images/active-arrow.svg')
        }else{
            arrow.setAttribute('src','images/arrow.svg')
        }
    })
})