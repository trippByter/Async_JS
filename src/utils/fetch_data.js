let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const fetch_data = (url_api) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest(); // Instanciar xmlhttprequest
        xhttp.open('GET', url_api, true); // Abrimos conexión a través de GET a la URL | true: activa el asincronismo
        xhttp.onreadystatechange = (() => { //Validación de que se ejecuta el llamado
            if(xhttp.readyState === 4){ // Estado de la respuesta de la función
                (xhttp.status === 200)
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error('Error ', url_api))
            }
        });
        xhttp.send();
    });
   
}

module.exports = fetch_data;