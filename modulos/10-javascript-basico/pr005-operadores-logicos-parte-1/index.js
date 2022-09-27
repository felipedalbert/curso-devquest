/*
    == igual ---- a == b ---- verdadeiro se a for igual a b (não importa a tipagem)

    === ---- idêntico ---- a === b ---- verdadeiro se a for idéntico a b (a tipagem importa)

    != ---- diferente ---- a != b ---- verdadeiro se a for difrente de b

    !== ---- não identico ---- a !== b ---- verdadeiro se a for não identico a b (a tipagem importa)

    < ---- menor que ---- a < b ---- verdadeiro quando a for menor do que b

    > ---- maior que ---- a > b ---- verdadeiro quando a for maior do que b

    <= menor igual que ---- a <= b ---- verdadeiro quando a for menor ou igual a b

    >= menor igual que ---- a >= b ---- verdadeiro quando a for maior ou igual a b
*/

const a = 7;
const b = 6;

function identicos(){
    if(a === b){
        return "verdadeiro";
    } else{
        return "falso";
    }
}

function naoIdenticos(){
    if(a !== b){
        return "verdadeiro";
    } else{
        return "falso";
    }
}

function menorQue(){
    if(a < b){
        return "verdadeiro";
    } else{
        return "falso";
    }
}

function maiorQue(){
    if(a > b){
        return "verdadeiro";
    } else{
        return "falso";
    }
}

function menorIgual(){
    if(a <= b){
        return "verdadeiro";
    } else{
        return "falso";
    }
}

function maiorIgual(){
    if(a >= b){
        return "verdadeiro";
    } else{
        return "falso";
    }
}

console.log("O valor de 'A' é " + a + " e o valor de 'B' é " + b);

console.log(("os valores de 'a' e 'b' são identicos? ") + identicos());

console.log(("os valores de 'a' e 'b' são diferentes? ") + naoIdenticos());

console.log(("a é menor que b? ") + menorQue());

console.log(("a é maior que b? ") + maiorQue());

console.log(("a é menor/igual a b? ") + menorIgual());

console.log(("a é maior/igual b? ") + maiorIgual());