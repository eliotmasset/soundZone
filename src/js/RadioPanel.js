import React from 'react';

class RadioPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.audio = React.createRef();
    this.playbutton = React.createRef();
    this.pausebutton = React.createRef();
    this.waiter = React.createRef();
  }

  play()
  {
    this.playbutton.current.style.display="none";
    this.pausebutton.current.style.display="inline-block";
    this.audio.current.play();
  }

  pause()
  {
    this.playbutton.current.style.display="inline-block";
    this.pausebutton.current.style.display="none";
    this.audio.current.pause();
  }

  reload()
  {
        this.play();
        this.playbutton.current.style.display="none";
        this.waiter.current.style.display="inline-block";
        this.pausebutton.current.style.display="none";
        this.audio.current.load();
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
    this.audio.current.addEventListener("canplaythrough", event => {
        /* the audio is now playable; play it if permissions allow */
        this.waiter.current.style.display="none";
        this.play();
      });
    return (
      <div id="RadioPanel">
            <audio ref={this.audio} preload="auto" id="player" src={this.props.radio.url}></audio>
            <img src={this.props.img} id={this.props.radio.name}></img>
            <h4>{this.props.radio.name}</h4>
            <div ref={this.playbutton} onClick={() => this.play()} id="play_button"><i className="fas fa-play-circle"></i></div>
            <div ref={this.pausebutton} onClick={() => this.pause()} id="pause_button"><i className="fas fa-pause-circle"></i></div>
            <div ref={this.waiter} id="lds-facebook"><div></div><div></div><div></div></div>
            <div onClick={() => this.reload()} id="load_button"><i className="fas fa-redo"></i></div>
            {this.props.radio.tags.map((item) => <div key={item} className="box-tag">{item}</div>)}
      </div>
    );
  }
}
export {RadioPanel}