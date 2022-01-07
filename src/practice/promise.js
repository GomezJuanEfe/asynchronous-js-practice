// Definición: Una Promise es un objeto que representa la terminación o el fracaso de una operación asíncrona.

// Forma simple

const myPromise = new Promise ((resolve, reject) => {
  setTimeout(()=> {
    resolve ('my promise!')
  },2000);
})

myPromise
  .then(msg => console.log(msg))


// Implementando reject

console.log('empieza el codigo')

const myPromise2 = new Promise ((resolve, reject) => {
  if (true) {
    setTimeout(() => {
      resolve ('Mi promesa 2 !!')
    }, 1000)
  } else {
    const error = new Error ('Test error...')
  }
})

myPromise2
  .then(msg => console.log(msg))
  .catch(e => console.log(e.message))



// Dentro de una función

console.log('Start conding...')

const myPromiseFn = () => {
  return new Promise ((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve ('my promise function'), 2000)
      : reject (new Error ('Whoops...'))
  })
}

myPromiseFn()
  .then(msg => console.log(msg))
  .catch(e => console.log(e.message))



// Método Promise.all

console.log('Start coding...')

const myPromiseFn1 = () => {
  return new Promise ((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve ('my promise function 1 !'), 2000)
      : reject (new Error ('Whoops...'))
  })
}

const myPromiseFn2 = () => {
  return new Promise ((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve ('my promise function 2 !!'), 2000)
      : reject (new Error ('Whoops...'))
  })
}


Promise.all([myPromiseFn1(), myPromiseFn2()])
  .then(msg => console.log(msg))
  .catch(e => console.log(e))
