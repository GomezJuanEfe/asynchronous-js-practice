const somethingWilHappen = () => {
    return new Promise((resolve, reject) => {
        if (true){
            resolve('Hey!');
        } else {
            reject('Whoops!');
        }
    });
};

somethingWilHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));


    const somethingWilHappen2 = () => {
        return new Promise((resolve, reject) => {
            if (true) {
                setTimeout(() => {
                    resolve('True');
                }, 2000)
            } else {
                const error = new Error('Whoops!');
                reject(error);
            }
        });
    }

    somethingWilHappen2()
        .then(response => console.log(response))
        .catch(err => console.error(err));

//Correr varias pormesas al mismo tiempo. Esto lo logro con el método .all del objeto Promise

Promise.all([somethingWilHappen(), somethingWilHappen2()])
    .then(response => {
        console.log('Array of results', response);
    })
    .catch(err => {
        console.error(err);
    });