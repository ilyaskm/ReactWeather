var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=0beec6430da234695e85160c01862e1d&units=imperial';

module.exports = {
    getTemp : function(location) {

        var encodedLocation = encodeURIComponent(location);
        var completeUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
        return axios.get(completeUrl).then(function(res){
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return {location: res.data.name,
                    temp: res.data.main.temp};
            }
        }, function(res) {
            throw new Error(res.response.data.message);
        })
    }
}
