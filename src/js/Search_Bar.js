import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.inputText = React.createRef();
  }

  setFocus() {
        this.inputText.current.focus();
  }

  render() {
      return(
        <div id="SearchBar">
            <input onChange={event => this.props.change(event.target.value)} ref={this.inputText} type="text" id="radio_query" placeholder="Name of a radio..."></input>
            <i onClick={() => this.setFocus()} className="fas fa-search"></i>
        </div>);
  }
}
export {SearchBar}