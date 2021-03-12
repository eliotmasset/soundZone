import React from 'react';
class Radio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let selected=this.props.selected ? "selected" : "";
    let classes = 'Radio '+selected;
    
    return (
    <div onClick={this.props.onClick} className={classes}>
            <img src={this.props.img} id={this.props.value.name}></img>
            <h3>{this.props.value.name}</h3>
    </div>
    );
  }
}
export {Radio}