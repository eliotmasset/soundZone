import React from 'react';
import {Button_panel} from './button_panel.js';

class RadioPanel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.audio = React.createRef();
    this.button_pan = React.createRef();
  }

  render() {
      console.log(this.audio.current);
    if(this.props.radio==undefined)
    {
        return (
          <div id="RadioPanel">
            <audio ref={this.audio} preload="auto" id="player"></audio>
          </div>
        );
    }

    return (
      <div id="RadioPanel">
            <audio ref={this.audio} preload="auto" id="player" src={this.props.radio.url}></audio>
            <img src={this.props.img} id={this.props.radio.name}></img>
            <h4>{this.props.radio.name}</h4>
            <Button_panel current={this.props.radio} ref={this.button_pan} audio={this.audio} etat={"waiter"} />
            {this.props.radio.tags.map((item) => <div key={item} className="box-tag">{item}</div>)}
      </div>
    );
  }
}
export {RadioPanel}