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
    document.getElementById("pause_button").style.display="inline-block";
    document.getElementById("player").play();
  }

  pause()
  {
    document.getElementById("play_button").style.display="inline-block";
    document.getElementById("pause_button").style.display="none";
    document.getElementById("player").pause();
  }

  reload()
  {
        this.play();
        document.getElementById("play_button").style.display="none";
        document.getElementById("lds-facebook").style.display="inline-block";
        document.getElementById("pause_button").style.display="none";
        document.getElementById("player").load();
  }

  render() {
    if(this.props.radio==undefined)
    {
        this.last=null;
        if(document.getElementById("player")!=undefined)
          document.getElementById("player").pause();
        return (
          <div id="RadioPanel">
            <audio preload="auto" controls id="player"></audio>
          </div>
        );
    }
    if(this.last!=this.props.radio.name && this.last!=null)
    {
        this.pause();
        document.getElementById("play_button").style.display="none";
        document.getElementById("lds-facebook").style.display="inline-block";
    }
    document.getElementById("player").addEventListener("canplaythrough", event => {
        /* the audio is now playable; play it if permissions allow */
        document.getElementById("lds-facebook").style.display="none";
        this.play();
      });
    this.last=this.props.radio.name;
    return (
      <div id="RadioPanel">
            <audio preload="auto" controls id="player" src={this.props.radio.url}></audio>
            <img src={this.props.img} id={this.props.radio.name}></img>
            <h4>{this.props.radio.name}</h4>
            <div onClick={() => this.play()} id="play_button"><i className="fas fa-play-circle"></i></div>
            <div onClick={() => this.pause()} id="pause_button"><i className="fas fa-pause-circle"></i></div>
            <div id="lds-facebook"><div></div><div></div><div></div></div>
            <div onClick={() => this.reload()} id="load_button"><i className="fas fa-redo"></i></div>
            {this.props.radio.tags.map((item) => <div key={item} className="box-tag">{item}</div>)}
      </div>
    );
  }
}
export {RadioPanel}