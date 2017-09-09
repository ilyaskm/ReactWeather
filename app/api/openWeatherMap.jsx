var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=0beec6430da234695e85160c01862e1d&units=imperial';

module.exports = {
    getTemp : function(location) {

        var encodedLocation = encodeURIComponent(location);
        var completeUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(completeUrl).then(function(res){
            debugger;
            if (res.data.cod && res.data.message) {
                return new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function(res) {
            return new Error(res.data.message);
        })
    }
}
