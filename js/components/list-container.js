var React = require('react');
var ReactDOM = require('react-dom');

var List = require('./list');

class ListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      list: []
    };
  }

  onAddInputChanged(text) {
    this.setState({text});
  }

  addSubmit() {
    this.setState({
      list: this.state.list.concat(this.state.text)
    });
  }

  render() {
    return <List cards={this.state.list} callback={this.addSubmit.bind(this)} onChange={this.onAddInputChanged.bind(this)} />
  }

}

module.exports = ListContainer;