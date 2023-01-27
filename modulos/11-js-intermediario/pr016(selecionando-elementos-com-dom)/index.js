let p = document.getElementById('paragrafo1')

console.log(p)

let inputsPorClasse = document.getElementsByClassName('tag-de-input')

console.log(inputsPorClasse[1])

let inputPorTag = document.getElementsByTagName('h1')

let inputPorName = document.querySelectorAll("input[name='email']") //query = consulta

console.log(inputPorName)






//diferenças entre HTMLColection e NodesList


let paragrafosComHtmlColection = document.getElementsByTagName('p')

let paragrafosComNodeList = document.querySelectorAll('p')

paragrafosComNodeList.forEach(paragrafo =>{
    paragrafo.style.color = 'blue';
})

// paragrafosComHtmlColection.forEach(paragrafo =>{
//     paragrafo.style.color = 'blue';
// })


// for(let i=0; i < paragrafosComHtmlColection.length; i++){
//     paragrafosComHtmlColection[i].style.color = 'blue'
// }





