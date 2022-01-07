// Fetch es otro objeto que se utiliza para ejecutar peticiones a recursos en la red
// Nota: normalmente corre en un navegador, como estamos ejecutando código con Node.js, necesito instalar la dependencia

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));


// aplicación con promesas

const API = 'https://pokeapi.co/api/v2/pokemon/';

fetch(API)
  .then(data => data.json())
  .then(data => {
    console.log(data.count)
    return data
  })
  .then(data => {
    console.log(data.results[0].name)
    return data
  })
  .then(data => {
    fetch(data.results[0].url)
      .then(data => data.json())
      .then(data => console.log(data.abilities[0].ability.name))
  })
  .catch(e => console.log(e))



// Aplicación con try - catch

const fetchData = async (url_api) => {
  try {
    console.log(url_api);
    let response = await fetch(url_api);
    response = await response.json();
    console.log(response.count);

    console.log(response.results[0].name)

    let response2 = await fetch(response.results[0].url);
    response2 = await response2.json();
    console.log(response2.abilities[0].ability.name)
  } catch (err) {
    console.log(err.message);
  } finally {
    console.log('Termina función async')
  }
}

fetchData(API)