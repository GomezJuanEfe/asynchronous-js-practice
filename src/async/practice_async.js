// Async y await forma simple

let myPromise = () => {
  return new Promise ((resolve, reject) => {
    (false)
      ? setTimeout(() => resolve ('Hola mundo!'),2000)
      : reject (new Error ('Test Error'))
  })
}


const doSomething = async () => {
  const something = await myPromise();
  console.log('Async function inicio');
  console.log(something);
  console.log('Async function fin');
}

console.log('Before');
doSomething();
console.log('After');


// Entendiendo la sentencia try, catch, finally

try {
  console.log ('Start of try runs')

  // next line is an error
  unicycle;

  console.log ('End of try runs -- never reached')
} catch(err) {
  console.log('Error has ocurred: ' + err.stack )
  // could different properties like err.message, err.name, or just err
} finally {
  console.log('This is always run')
}

console.log ('...Then the exection continues')


// La misma función implementando Try - Catch

const anotherFunction = async () => {
  try {
    console.log('Async function start');
    const something = await myPromise();
    console.log(something);
    console.log('Async function ends');
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log('Funcion terminada')
  }
}

anotherFunction();