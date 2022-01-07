// Es un objeto de JavaScript desarrollado por Microsoft para ejecutar llamados a recursos en la red.
// Nota: normalmente corre en un navegador, como estamos ejecutando código con Node.js, necesito instalar la dependencia

let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const API = 'https://pokeapi.co/api/v2/pokemon/';

function fetchData (url_api, callback) {
  let xhr = new XMLHttpRequest;

  xhr.open('GET',url_api,true)
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          callback(null, JSON.parse(xhr.responseText))
        } else {
          const err = new Error (`Error: ${url_api}`);
          return err
        }
      }
    }
  xhr.send();
}

fetchData(API, (error, data) => {
  if (error) return console.log(error);
    fetchData(API, (error2, data2) => {
      if (error2) return console.log(error);
        fetchData(data.results[0].url, (error3, data3) => {
          if (error3) return console.log(error3);
          console.log(data.count);
          console.log(data2.results[0].name);
          console.log(data3.abilities[0].ability.name);
        })
    })
});