let nomeFilme = 'Homem Aranha'

switch (nomeFilme) {
    case 'Vingadores' :
        console.log('Filme dos Vingadores');
        break
    case 'Batman vs Superman' : console.log('É o filme do Batman vs Superman') 
    break
    default : 
        console.log('É outro filme') // case padrão caso as condições anteriores não sejam satisfeitas
        break
}

let avaliacao = 55

switch (avaliacao) {
    case 1:
    case 2:
        console.log('Filme ruim');
        break
    case 3:
    case 4:
        console.log('Filme mediano');
        break
    case 5:
        console.log('Filme excelente');
        break
    default:
        console.log('Nota invalida')
    break
}