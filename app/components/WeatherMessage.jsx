var React = require('react');

var WeatherMessage = React.createClass({
    render : function() {
        return (
            <h2>It is {this.props.temp} degrees in {this.props.location}</h2>
        )
    }
});

module.exports = WeatherMessage;
