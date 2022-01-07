// SetTimeout 1

console.log('inicia la función');

setTimeout(() => {
  console.log('Función setTimeout 1')
}, 2000);


// SetTimeout 2

console.log('inicia función')

function msg () {
  console.log('Hola mundo!')
}

setTimeout(msg, 2000);


// Calculadora

function sum (a, b) {
  return a + b
}

function mul (a, b) {
  return a * b
}

function calc (a, b, cb) {
  const result = cb(a,b);
  return console.log(result)
}

calc(4,4,sum);
calc(4,4,mul);