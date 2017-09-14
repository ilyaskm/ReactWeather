var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
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
            loading : true,
            errorMessage: undefined,
            location: undefined,
            temp: undefined
        });
        setTimeout(1000, function() {});
        openWeatherMap.getTemp(location).then(function(resp){
           that.setState({
                location: resp.location,
                temp: resp.temp,
                loading: false
            })
        }, function(err) {
            that.setState({
                loading : false,
                errorMessage: err.message
            })
        })

    },
    componentDidMount: function() {
        var location = this.props.location.query.location;

        if (location && location.length>0) {
            this.handleSearch(location);
            window.location.hash="/#";
        }
    },
    componentWillReceiveProps: function(newProps) {
        var location = newProps.location.query.location;

        if (location && location.length>0) {
            this.handleSearch(location);
            window.location.hash="/#";
        }
   },
    render : function() {
        var {loading, location, temp, errorMessage} = this.state;
        function renderMessage() {
            if (loading) {
                return (<h2 className='text-center'>Loading Weather...</h2>);
            } else if (location && temp) {
                return <WeatherMessage location={location} temp={temp}/>
            }
        };

        function renderError() {
            if (typeof errorMessage === 'string') {
                return <ErrorModal message={errorMessage}/>
            }
        };

        return (
            <div>
                <h1 className='text-center page-title'>Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch} />
                {renderMessage()}
                {renderError()}
            </div>
        )
    }
});

module.exports = Weather;
