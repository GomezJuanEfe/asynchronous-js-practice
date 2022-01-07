// SetTimeout 1

const message = () => {
  console.log('Hola mundo');
}

console.log('Inicia el código');

setTimeout(message, 2000);

// setTimeout 2

setTimeout(() => {
  console.log('Hola mundo, setTimeout 2');
}, 2000)

// callbacks 2

const sum = (a,b) => {
  result = a + b;
  return `Suma: ${result}`
}

const mul = (a,b) => {
  result = a * b;
  return `Multiplicación: ${result}`
}

const calc = (a,b,cb) => {
  result = cb(a,b);
  return console.log(result)
}

calc(2,4,sum)

calc(2,4,mul)