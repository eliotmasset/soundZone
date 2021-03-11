import React from 'react';
class Radio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
    <div onClick={this.props.onClick} className="Radio">
            <img src={this.props.img} id={this.props.value.name}></img>
            <h3>{this.props.value.name}</h3>
    </div>
    );
  }
}
export {Radio}