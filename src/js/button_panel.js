import React from 'react';

class Button_panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      etat: this.props.etat,
    };
    this.last==null;
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
    if(this.last!= null && this.last!= this.props.current)
    {
      this.props.audio.current.addEventListener("canplaythrough", event => {
        this.pause();
      });
      this.last=this.props.current;

      return(<div id="buttons_pan"><div id="lds-facebook"><div></div><div></div><div></div></div>
      <div onClick={() => this.reload()} id="load_button"><i className="fas fa-redo"></i></div></div>);
    }
    this.last=this.props.current;

    
    this.props.audio.current.addEventListener("canplaythrough", event => {
      this.setState({etat: "pause"});
      this.props.audio.current.play();
    });


    if(this.state.etat=="play")
      return(<div id="buttons_pan"><div onClick={() => this.pause()} id="play_button"><i className="fas fa-play-circle"></i></div>
      <div onClick={() => this.reload()} id="load_button"><i className="fas fa-redo"></i></div></div>);
    else if(this.state.etat=="pause")
      return(<div id="buttons_pan"><div onClick={() => this.play()} id="pause_button"><i className="fas fa-pause-circle"></i></div>
      <div onClick={() => this.reload()} id="load_button"><i className="fas fa-redo"></i></div></div>);
    else
      return(<div id="buttons_pan"><div id="lds-facebook"><div></div><div></div><div></div></div>
      <div onClick={() => this.reload()} id="load_button"><i className="fas fa-redo"></i></div></div>);
  }
}
export {Button_panel}