// 1. SetTimeout

const message = () => {
  console.log('Hola mundo');
}

console.log('Inicia el código');

setTimeout(message, 2000);

// 2. SetTimeout

setTimeout(() => {
  console.log('Hola mundo, setTimeout 2');
}, 2000)

// 3. Callbacks aplicados

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