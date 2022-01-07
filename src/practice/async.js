// Es un sintaxis diferente que hace nuestro código más legible y nos permite controlar el flujo de forma más fácil. Al agregar la palabra Async a una función significa que la función siempre devolverá una promesa.

const sum = async (a,b) => {
  return a + b
}

sum(7, 5)
  .then(r => console.log(r));

const sum = (a,b) => {
  return a + b
}

sum(7, 5)
  .then(r => console.log(r));  // Como resultado se espera un error porque falta el Async



// Forma simple

console.log('Start coding...')

const myPromiseFn = () => {
  return new Promise ((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve ('my promise function 1 !'), 2000)
      : reject (new Error ('Whoops...'))
  })
}

const asyncFn = async () => {
  console.log('Async');
  const result = await myPromiseFn();
  console.log(result.message);
  console.log('Async ends')
}

asyncFn();



// Entendiendo Try / Catch / Finally

try {
  console.log('hola mundo!');
  console.log('Probando try catch');
  Jejeje
  console.log('Hola de nuevo!')
} catch (error) {
  console.log(error)
} finally {
  console.log('sentencia terminada')
}



// Implementando async con try - catch

console.log('Start coding...')

const myPromiseFn = () => {
  return new Promise ((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve ('my promise function 1 !'), 2000)
      : reject (new Error ('Whoops...'))
  })
}

const asyncFn = async () => {
  try {
    console.log('Async');
    const result = await myPromiseFn();
    console.log(result);
    console.log('Termina Try')
  } catch (e) {
    console.log(`Error: ${e}`)
  } finally {
    console.log('Async ends')
  }
}

asyncFn();
