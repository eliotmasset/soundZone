import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.inputText = React.createRef();
  }

  render() {
      return(
        <div id="SearchBar">
            <input ref={this.inputText} type="text" placeholder="Name of a radio..."></input>
        </div>);
  }
}
export {SearchBar}