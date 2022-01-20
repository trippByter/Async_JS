const somethingWillHappen00 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Promise00: Resolve - True');
        } else {
            reject('Promise00: Reject - False');
        }
    })
}

somethingWillHappen00()
    .then(response => console.log(response))
    .catch(err => console.error(err));


const somethingWillHappen01 = () => {
    return new Promise((resolve, reject) => {
        if (true){
            setTimeout(() => {
                resolve('Promise01: Resolve - True - setTimeout');
            }, 2000);
        } else {
            // Muestra mensaje del error por consola
            const error = new Error('Promise01: Reject - False');
            reject(error);
        }
    });
}

somethingWillHappen01()
    .then(response => console.log(response))
    .catch(err => console.error(err));

// Promesas anidadas
Promise.all([somethingWillHappen00(), somethingWillHappen01()])
    .then(response => {
        console.log('Array of results' + response);
    })
    .catch(err => {
        console.error(err);
    });

