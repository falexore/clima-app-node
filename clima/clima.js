const axios = require('axios');


const getClima = async(lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=ee9538b221f72239a391f3068c324a85`)
        // console.log('Clima: ', resp.data.main.temp);
    return resp.data.main.temp;

}
module.exports = {
    getClima
}