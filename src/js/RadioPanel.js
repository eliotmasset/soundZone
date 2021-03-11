import React from 'react';
class RadioPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.last=null;
  }

  play()
  {
    document.getElementById("play_button").style.display="none";
    document.getElementById("pause_button").style.display="block";
    document.getElementById("player").play();
  }

  pause()
  {
    document.getElementById("play_button").style.display="block";
    document.getElementById("pause_button").style.display="none";
    document.getElementById("player").pause();
  }

  render() {
    if(this.props.radio==undefined)
    {
        return (
          <div id="RadioPanel">
          </div>
        );
    }
    if(this.last!=this.props.radio.name && this.last!=null)
    {
        this.pause();
    }
    this.last=this.props.radio.name;
    return (
      <div id="RadioPanel">
            <img src={this.props.img} id={this.props.radio.name}></img>
            <h3>{this.props.radio.name}</h3>
            <div onClick={() => this.play()} id="play_button">play</div>
            <div onClick={() => this.pause()} id="pause_button">pause</div>
            <audio  preload="auto" controls id="player" src={this.props.radio.url}></audio>
      </div>
    );
  }
}
export {RadioPanel}