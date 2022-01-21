const fetchData = require('../utils/fetch_data');
const API = 'https://rickandmortyapi.com/api/character/';

fetchData(API)
    //Se hace el llamado, y luego q resuelve, esa info
    // la presento por consola
    .then(data => {
        console.log(data.info.count);
        // Este return, ejecuta una nueva llamada de fetchData
        // el cual devuelve el 'data' del próximo '.then'
        return fetchData(`${API}${data.results[6].id}`)
    })
    // Este data es de la función anterior
    .then(data => {
        console.log(data.name)
        return fetchData(data.origin.url)
    })
    .then(data => {
        console.log(data.dimension)
    })
    .catch(err => console.error(err));