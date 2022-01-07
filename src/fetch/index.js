//Al estar utilizando Node como entorno de ejecución de JavaScript necesitamos instalar fetch como dependencia de desarrollo

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const API = 'https://rickandmortyapi.com/api/character/';

console.log(fetch());

// implementación de fetch con promesas

fetch(API)
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log(data.count);
    console.log(data.results[0].name)
    return fetch(data.results[0].origin.url)
  })
  .then((data) => {
    return data.json()
  })
  .then((data) =>{
    console.log(data.dimension)
  })
  

// Implementación con Async - Await

