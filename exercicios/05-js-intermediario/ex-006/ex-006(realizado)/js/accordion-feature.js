const contentBox = document.querySelectorAll('.content-box')

contentBox.forEach(item =>{
    item.addEventListener('click', () =>{
        const currentActiveItem = document.querySelector('.active')
        
        if(currentActiveItem){
            currentActiveItem.classList.remove('active')
            currentActiveItem.querySelector('.icon').setAttribute('src','images/arrow.svg')

            if(currentActiveItem == item) return
        }

        item.classList.add('active')
        
        const isActive = item.classList.contains('active')

        const arrow = item.querySelector('.icon')

        if(isActive) arrow.setAttribute('src','images/active-arrow.svg')
        
    })
})