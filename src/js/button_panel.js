import React from 'react';

class Button_panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      etat: this.props.etat,
    };
    this.last==null;
    this.playing=false;
  }

  play()
  {
    this.setState({etat: "play"});
    this.props.audio.current.pause();
  }

  pause()
  {
    this.setState({etat: "pause"});
    this.props.audio.current.play();
  }
  
  reload()
  {
    this.props.audio.current.play();
    this.setState({etat: "waiter"});
    this.props.audio.current.load();
  }

  render() {
    var fav_button =<div onClick={() => this.props.update_fav()} id="fav_button"><i className="far fa-heart"></i></div>;

    if(this.props.favs.indexOf(this.props.current)!=-1)
      var fav_button =<div onClick={() => this.props.update_fav()} id="fav_button"><i className="fas fa-heart"></i></div>;

    if(this.last!= null && this.last != this.props.current)
    {
      this.last=this.props.current;
      return(<div id="buttons_pan"><div id="lds-facebook"><div></div><div></div><div></div></div>
      <div onClick={() => this.reload()} id="load_button"><i className="fas fa-redo"></i></div>{fav_button}</div>);
    }
    this.last=this.props.current;

    if(!this.playing)
      this.props.audio.current.addEventListener("canplay",(event) => {
        this.props.audio.current.play();
        this.playing=true;
        this.setState({etat: "pause"});
        event.stopPropagation();
      });


    if(this.state.etat=="play")
      return(<div id="buttons_pan"><div onClick={() => this.pause()} id="play_button"><i className="fas fa-play-circle"></i></div>
      <div onClick={() => this.reload()} id="load_button"><i className="fas fa-redo"></i></div>{fav_button}</div>);
    else if(this.state.etat=="pause")
      return(<div id="buttons_pan"><div onClick={() => this.play()} id="pause_button"><i className="fas fa-pause-circle"></i></div>
      <div onClick={() => this.reload()} id="load_button"><i className="fas fa-redo"></i></div>{fav_button}</div>);
    else
      return(<div id="buttons_pan"><div id="lds-facebook"><div></div><div></div><div></div></div>
      <div onClick={() => this.reload()} id="load_button"><i className="fas fa-redo"></i></div>{fav_button}</div>);
  }
}
export {Button_panel}