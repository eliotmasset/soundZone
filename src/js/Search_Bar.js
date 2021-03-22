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
        <div className="SearchBar">
            <input onChange={event => this.props.change(event.target.value)} ref={this.inputText} type="text" className="radio_query" placeholder={this.props.placeHolder}></input>
            <i onClick={() => this.setFocus()} className="fas fa-search"></i>
        </div>);
  }
}
export {SearchBar}