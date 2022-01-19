// npm install xmlhttprequest --save
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character/'

// Función encargada de hacer peticiones
function fetch_data(url_api, callback) {
    let xhttp = new XMLHttpRequest(); // Instanciar xmlhttprequest
    xhttp.open('GET', url_api, true); // Abrimos conexión a través de GET a la URL | true: activa el asincronismo
    xhttp.onreadystatechange = function (event){ //Validación de que se ejecuta el llamado
        if(xhttp.readyState === 4){ // Estado de la respuesta de la función
            if(xhttp.status === 200){ // Validamos el 'status code' de la conexión
                callback(null, JSON.parse(xhttp.responseText)) //Si valida, ejecutamos el callback
            } else {
                const error = new Error('Error' + url_api);
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}


// Hacemos la petición a la API
// Obtener cuantos personajes tiene
// Obtener el primer personaje
// Acceder a la ubicación para saber su dimensión
// 'data1' es el resultado de la petición que estamos ejecutando
fetch_data(API, function(error1, data1){
    if (error1) return console.error(error1);
    fetch_data(API + data1.results[0].id, function(error2, data2){
        if(error2) return console.error(error2);
        fetch_data(data2.origin.url, function(error3, data3){
            if(error3) return console.error(error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        })
    })
})