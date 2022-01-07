let returnIn2Sec = () => {
  return new Promise ((resolve, reject) => {
    if (true) {
      setTimeout(()=>{
        resolve ('Hola mundo')
      }, 2000);
    } else {
      reject (new Error ('Mensaje de error'))
    }
  });
}

let call = async () => {
  console.log('calling de promise...');
  const result = await returnIn2Sec();
  console.log(result);
  console.log('Promise done');
  console.log(result + ', de nuevo');
  const result2 = await returnIn2Sec();
  console.log('result2: ' + result2);
}

call();