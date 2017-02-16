var React = require('react');
var ReactDOM = require('react-dom');

var CardList = require('./list');

var Board = function() {
    return (
        <div className='board'>
            <CardList />
            <CardList />
            <CardList />
        </div>
    );
};

module.exports = Board;