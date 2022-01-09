const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const API = 'https://rickandmortyapi.com/api/character';


// Promesas

fetch(API)
  .then(data => data.json())
  .then(data => {
    console.log(data.info.count);
    console.log(data.results[0].name);
    return fetch(data.results[0].origin.url);
  })
  .then(data => data.json())
  .then(data => console.log(data.dimension))



// Async - Await

async function fetchData (url_api) {
  let data = await fetch(url_api);
  data = await data.json();
  console.log(data.info.count);
  console.log(data.results[0].name);

  let data2 = await fetch(data.results[0].origin.url);
  data2 = await data2.json();
  console.log(data2.dimension);
}

fetchData(API);