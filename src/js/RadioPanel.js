import React from 'react';
import {Button_panel} from './Button_panel.js';

class RadioPanel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
    this.audio = React.createRef();
    this.button_pan = React.createRef();
    this.volume = React.createRef();
  }

  changeVolume() {
    this.audio.current.volume=this.volume.current.value/100;
  }

  render() {
    if(this.props.radio==undefined)
    {
        return (
          <div id="RadioPanel">
            <audio ref={this.audio} preload="auto" id="player"></audio>
          </div>
        );
    }

    const image = require(`../img/${this.props.image}`);

    return (
      <div id="RadioPanel">
            <audio ref={this.audio} preload="auto" id="player" src={this.props.radio.url}></audio>
            <img src={image} id={this.props.radio.name}></img>
            <h4>{this.props.radio.name}</h4>
            <Button_panel current={this.props.radio} ref={this.button_pan} audio={this.audio} etat={"waiter"} />
            <input ref={this.volume} onChange={() => this.changeVolume()} type="range" id="volume" defaultValue={this.audio.current.volume*100} name="volume" min="0" max="100"></input>
            {this.props.radio.tags.map((item) => <div key={item} className="box-tag">{item}</div>)}
      </div>
    );
  }
}
export {RadioPanel}