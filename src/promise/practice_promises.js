// Forma más simple

let myPromise = new Promise ((resolve, reject) => {
  setTimeout(() => {
    resolve ('Hola mundo!')
  },2000)
})

myPromise
  .then(console.log('Se ejecuta la promesa'))
  .then((msg) => {
    return console.log(`Mensaje asíncrono: ${msg}`)
  })
  .then(console.log('tercera linea del promise'))


// Implementando el reject

let myPromise2 = new Promise ((resolve, reject) => {
  if (true) {
    setTimeout(() => {
      resolve ('Hello world!!')
    },2000)
  } else {
    const error = new Error ('Error, lo siento!')
    reject (error)
  }
})

myPromise2
  .then(console.log('Se ejecuta la promesa'))
  .then(msg => console.log(`Mensaje asíncrono: ${msg}`))
  .then(console.log('Última línea de la promesa'))
  .catch(msg => console.log(msg.message))


// Dentro de una función

const myPromiseFn = () => {
  return new Promise ((resolve, reject) => {
    if (false) {
      setTimeout(() => {
        resolve ('Promesa en una función')
      },2000)
    } else {
      const err = new Error ('Ups... Error')
      reject (err)
    }
  })
}

myPromiseFn()
  .then(data => console.log(data))
  .catch(err => console.log(err.message))


const myPromiseFn2 = () => {
  return new Promise ((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve ('función dentro de una promesa dos!!')
      },2000)
    } else {
      const err = new Error ('Ups... Error')
      reject (err)
    }
  })
}

myPromiseFn2()
  .then(msg => console.log(msg))
  .catch(err => console.log(err.message))

// Correr varias promesas al mismo tiempo - Método Promise.all

Promise.all([myPromiseFn(), myPromiseFn2()])
  .then(res => {
    console.log(`Array of results: ${res}`)
  })
  .catch (err => {
    console.log(`Array error: ${err.message}`)
  })
