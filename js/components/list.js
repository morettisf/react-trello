var React = require('react');
var ReactDOM = require('react-dom');

var Card = require('./card');

class CardList extends React.Component {

  onAddSubmit(event) {
    event.preventDefault();
    console.log(event.target.value);
    this.props.callback();
    event.target.value = '';
  }

  onChange(event) {
    event.preventDefault();
    console.log(event.target.value);
    this.props.onChange(event.target.value);
  }

  render() {
    let listCards = [];
    let propsCards = this.props.cards;
    let propsTitle = this.props.title;
    console.log(propsCards);
    for (var i = 0; i < propsCards.length; i++) {
      listCards.push(<Card key={i} title={propsCards[i]} />)
    }

    return (
      <div className='card-list'>
        <div className='list-title'>{propsTitle}</div>
        <div className='list-cards'>{listCards}</div>
        <form onSubmit={this.onAddSubmit.bind(this)}>
          <input type='text' onChange={this.onChange.bind(this)} />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

module.exports = CardList;