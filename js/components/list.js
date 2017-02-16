var React = require('react');
var ReactDOM = require('react-dom');

var Card = require('./card');

var CardList = function() {
    return (
        <div className='card-list'>
            <Card />
            <Card />
            <Card />
        </div>
    );
};

module.exports = CardList;