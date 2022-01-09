XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const API = 'https://rickandmortyapi.com/api/character';


// Callbacks

function fetchData (url_api, callback) {
  const xhr = new XMLHttpRequest;

  xhr.open('GET', url_api, true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        callback(null, JSON.parse(xhr.responseText))
      } else {
        return new Error ('Test error')
      }
    }
  }
  xhr.send();
}

fetchData(API, (err, data) => {
  if (err) return console.log(err);
  console.log(data.info.count);
  fetchData(API, (err2, data2) => {
    if (err2) return console.log(err);
    console.log(data.results[0].name)
    fetchData(data.results[0].origin.url, (err3, data3) => {
      if (err3) return console.log(err3)
      console.log(data3.dimension);
    })
  })
})


// Promises

function fetchDataPromise (url_api) {
  return new Promise ((resolve, reject) => {
    const xhr = new XMLHttpRequest;

    xhr.open('GET', url_api, true);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4){
        (xhr.status === 200)
        ? resolve (JSON.parse(xhr.responseText))
        : reject (new Error ('Test error'))
      }
    }
    xhr.send();
  })
}

fetchDataPromise(API)
  .then(data => {
    console.log(data.info.count);
    return fetchDataPromise(API)
  })
  .then(data => {
    console.log(data.results[0].name)
    return fetchDataPromise(data.results[0].origin.url)
  })
  .then(data => console.log(data.dimension))



// async - await

async function fetchDataAsync (url_api) {
  const data = await fetchDataPromise(API);
  console.log(data.info.count);
  console.log(data.results[0].name);

  const origin = await fetchDataPromise(data.results[0].origin.url);
  console.log(origin.dimension);
}

fetchDataAsync();