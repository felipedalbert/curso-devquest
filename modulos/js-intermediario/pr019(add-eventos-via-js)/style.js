let selectDeEstado = document.querySelector("select[name='estados']")

selectDeEstado.addEventListener("change", function(){
    alert('mudou o select')
    //escutou o evento(change) da variável e disparou um alert a partir da function utilizada como parametro para o metodo addEventListener.
})

selectDeEstado.addEventListener("change", function(event) {
    console.log(event) // vai printar o objeto evento (change) em sí. Esse evento terá uma série de propriedades, como o caminho, a fonte e alvo (target). 
})

selectDeEstado.addEventListener("change", function(event) {
    console.log(event.target.value) //o target será o mais será mais comum, ja que é utilizado para acessar geralmente seus valore internos com value. 
})

selectDeEstado.addEventListener("change", function() {
    console.log(this.value) // o this também funciona nesse caso, pegando o valor do objeto 'selectDeEstado'.

    //lembre-se de não utilizar arrow funtion, já que elas nao vinculam seu próprio escopo, referenciando sempre o escopo pai que, nesse caso é o window.
})


