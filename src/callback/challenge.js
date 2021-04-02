/*
0. Antes que nada vamos a instanciar el objeto XMLHttpRequest (el cual instalé previamente en mi directorio del proyecto con Node mediante la terminal).

1. Vamos a crear la función (fetchData) que me va a permitir traer la información de la API, que también va a hacer un callback y va a desencadenar los llamados que necesitamos.

2. Dentro de la función vamos a empezar a construir la petición por medio de XMLHttpRequest. Para eso vamos a instanciar este elemento.

3. Luego voy a codificar la apertura por medio del método open.

4. Vamos a generar o excuchar lo que va a generar esa apertura con xhttp.onreadystatechange... Si esta cambio suscede entonces se va a ejecutar una función.

5. Una vez en esta función voy a tener un espacio para hacer una validación para poder ejecutar mi callback. Básicamente es si el estado en el cual se encuentra es satisfactorio.

6. Una vez se cumpla esta validación voy a tener que "parsear" el resultado de mi petición para poder tratarlo mejor.

7. Por último, con el método send, mando mi solicitud.

8. De esta forma tengo la función que le va a dar vida a mis peticiones.
*/
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

let API = 'https://rickandmortyapi.com/api/character/';

function fetchData(url_api, callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', url_api, true);
    xhttp.onreadystatechange = function (event) {
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200){
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                const error = new Error('Error ' + url_api);
                return callback(error, null)
            }
        }
    }
    xhttp.send();
}

fetchData(API,function (error1, data1){
    if (error1) return console.error(error1);
    fetchData(API + data1.results[0].id, function(error2, data2){
        if (error2) return console.error(error2);
        fetchData(data2.origin.url, function(error3, data3){
            if (error3) return console.error(error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        });
    })
})