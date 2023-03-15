const a = 2;
const b = 2;

// e (&&)

console.log(a === b && a >= b); //true

console.log(a === b && a < b);

console.log(a !== b && a > b);

// ou (||)

console.log(a === b || a >= b);

console.log(a === b || a < b); 

console.log(a !== b || a > b);

// not (!)

console.log(!(a === b));

console.log(!(a < b));

console.log(!(a > b));