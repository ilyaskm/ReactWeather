var React = require('react');
// openwhethermap api key: 0beec6430da234695e85160c01862e1d
// url: http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=0beec6430da234695e85160c01862e1d



var WeatherForm = React.createClass({
    onFormSubmit: function(e) {
        e.preventDefault();
        var location = this.refs.location.value;

        if (location.length > 0) {
            this.refs.location.value = '';
            this.props.onSearch(location);
        }
    },
    render : function() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type='search' ref='location' placeholder="Search weather by city"/>
                    <button className='button expanded hollow'>Get Weather</button>
                </form>
            </div>
        )
    }
});

module.exports = WeatherForm;
