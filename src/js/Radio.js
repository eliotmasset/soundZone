import React from 'react';
class Radio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let selected=this.props.selected==this.props.data_key ? "Radio_selected" : "";
    let classe = 'Radio '+selected;
    const image = require(`../img/${this.props.image}`);
    return (
    <div onClick={this.props.onClick} className={classe}>
            <img src={image} id={this.props.value.name}></img>
            <h3>{this.props.value.name}</h3>
    </div>
    );
  }
}
export {Radio}