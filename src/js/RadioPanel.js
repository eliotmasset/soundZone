import React from 'react';
import {Button_panel} from './button_panel.js';

class RadioPanel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      etat: 'waiter',
    };
    this.audio = React.createRef();
    this.volume = React.createRef();
  }

  play()
  {
    this.setState({etat: "play"});
    this.audio.current.pause();
  }

  pause()
  {
    this.setState({etat: "pause"});
    this.audio.current.play();
  }
  
  reload()
  {
    this.audio.current.play();
    this.setState({etat: "waiter"});
    this.audio.current.load();
  }

  changeVolume() {
    this.audio.current.volume=this.volume.current.value/100;
  }

  onPlay(event)
  {
      this.audio.current.play();
      this.setState({etat: "pause"});
      event.stopPropagation();
  }

  render()
  {
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
            <audio ref={this.audio} onCanPlay={(event)=>this.onPlay(event)} preload="auto" id="player" src={this.props.radio.url}></audio>
            <img src={image} id={this.props.radio.name}></img>
            <h4>{this.props.radio.name}</h4>
            <Button_panel play={()=>this.play()} pause={()=>this.pause()} reload={()=>this.reload()} etat={this.state.etat} favs={this.props.favs} update_fav={() => this.props.update_fav()} current={this.props.radio} audio={this.audio} />
            <input ref={this.volume} onChange={() => this.changeVolume()} type="range" id="volume" defaultValue={this.audio.current.volume*100} name="volume" min="0" max="100"></input>
            {this.props.radio.tags.map((item) => <div key={item} className="box-tag">{item}</div>)}
      </div>
    );
  }
}
export {RadioPanel}
