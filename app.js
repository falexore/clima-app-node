const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
//const axios = require('axios');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


let getInfo = async(direccion) => {


    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coors.lag, coors.lng);

        return `El clima en ${coors.direccion} es de ${temp}°`;
    } catch (e) {
        return `No se pudo determinar el clima en ${direccion} `;
    }

}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));

// lugar.getLugarLatLng(argv.direccion)
//     .then(resp => {
//         console.log(resp);
//     })
//     .catch(e => console.log(e));

// clima.getClima(9.9220694, -84.0907246)
//     .then(tmp => console.log(tmp))
//     .catch(e => console.log(e));

//console.log(argv.direccion);
// let encodedUrl = encodeURI(argv.direccion);
// axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}`)
//     .then(resp => {
//         //console.log(JSON.stringify(resp.data, undefined, 2));
//         let location = resp.data.results[0];
//         let coors = location.geometry.location;

//         console.log('Direccion: ', location.formatted_address);
//         console.log('Lalitud', coors.lat);
//         console.log('Longitud', coors.lng);

//     })
//     .catch(e => console.log("ERROR", e));