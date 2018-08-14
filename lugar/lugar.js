const axios = require('axios');

const getLugarLatLng = async(direccion) => {
    let encodedUrl = encodeURI(direccion);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultads para la ciudad ${direccion}`);
    }
    //console.log(JSON.stringify(resp.data, undefined, 2));
    let location = resp.data.results[0];
    let coors = location.geometry.location;

    //console.log('Direccion: ', location.formatted_address);
    //console.log('Lalitud', coors.lat);
    //console.log('Longitud', coors.lng);

    return {
        direccion: location.formatted_address,
        lag: coors.lat,
        lng: coors.lng
    }

}

module.exports = {
    getLugarLatLng
}