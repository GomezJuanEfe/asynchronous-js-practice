let promise = new Promise ((resolve, reject) => {
  if (true) {
    setTimeout(()=>{
      resolve ('Hola mundo')
    }, 2000);
  } else {
    reject (new Error ('Mensaje de error'))
  }
})

promise
  .then((msg) => {
    console.log('waiting');
    console.log(msg);
    console.log('msg ready')
    return msg
  })
  .then(console.log('Here I am'))
  .then(msg => console.log(msg + ', de nuevo'))
  .catch((err) => {
    console.log(err);
  })