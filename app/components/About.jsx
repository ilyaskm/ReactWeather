var React = require('react');
var {Link} = require('react-router');

var About = (props) => (
    <div>
        <h1 className='text-center'>About</h1>
        <p>This is my first ReactJS application. I am learning ReactJS from Andrew through Udemy</p>
        <a href='https://github.com/ilyaskm/ReactWeather' target='_new'>GitHub Locaiton</a>
    </div>
);

module.exports = About;
