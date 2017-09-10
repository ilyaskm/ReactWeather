var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function() {
        return {
            loading: false
        }
    },
    handleSearch : function(location) {
        var that = this;
        this.setState({
            loading : true
        });
        setTimeout(1000, function() {});
        openWeatherMap.getTemp(location).then(function(temp){
           that.setState({
                location: location,
                temp: temp,
                loading: false
            })
        }, function(err) {
            that.setState({
                loading : false
            })
            alert(err);
        })

    },
    render : function() {
        var {loading, location, temp} = this.state;
        function renderMessage() {
            if (loading) {
                return (<h2 className='text-center'>Loading Weather...</h2>);
            } else if (location && temp) {
                return <WeatherMessage location={location} temp={temp}/>
            }
        }
        return (
            <div>
                <h1 className='text-center'>Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch} />
                {renderMessage()}
            </div>
        )
    }
});

module.exports = Weather;
