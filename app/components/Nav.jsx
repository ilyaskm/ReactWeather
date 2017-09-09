var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
   render: function() {
       return (
           <div>
               <h2>Nav Component</h2>
               <IndexLink to='/' activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>&nbsp;
               <Link to='/about' activeStyle={{fontWeight: 'bold'}}>About</Link>&nbsp;
               <Link to='/examples' activeStyle={{fontWeight: 'bold'}}>Examples</Link>
           </div>
       )
   }
});

module.exports = Nav;
