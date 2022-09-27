// if(true){
//     const mensagem1 = 'Olá'
// }

// console.log(mensagem1)


// {
//     const mensagem2 = 'Olá'
// }

// console.log(mensagem2)

// {
//     let mensagem3 = 'Olá'
// }

// console.log(mensagem3)

// {
//     var mensagem4 = 'Olá'
// }

// console.log(mensagem4);

// diferente de outros blocos de códigos, nas funçoes, o var fica preso
// ao escopo da função, assim como let e const

// function falar1(){
//     var mensagem5 = 'Olá mundo!'
//     console.log(mensagem5)
// }

// falar1()
// console.log(mensagem5);

//funçoes dentro de funções ficarão acessíveis somente dentro do seu escopo

function falar ( ) {
    const mensagem6 = "Olá Mundo!"
    console.log (mensagem6)

    function falarOutraCoisa(){
        a = 5 + 5
        return a
    }

    falarOutraCoisa();
    console.log(falarOutraCoisa());
}


falar();
// falarOutraCoisa();

// variavel de escopo global (apenas disponível no console do navegador)

console.log(variavelGlobal)

                       