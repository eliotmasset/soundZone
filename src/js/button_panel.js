import React from 'react';

class Button_panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.last==null;
  }

  render() {
    var fav_button =<div onClick={() => this.props.update_fav()} id="fav_button"><i className="far fa-heart"></i></div>;

    if(this.props.favs.indexOf(this.props.current)!=-1)
      fav_button = <div onClick={() => this.props.update_fav()} id="fav_button"><i className="fas fa-heart"></i></div>;

    if(this.last!= null && this.last != this.props.current)
    {
      this.last=this.props.current;
      return(<div id="buttons_pan"><div id="lds-facebook"><div></div><div></div><div></div></div>
      <div onClick={() => this.props.reload()} id="load_button"><i className="fas fa-redo"></i></div>{fav_button}</div>);
    }
    this.last=this.props.current;


    if(this.props.etat=="play")
      return(<div id="buttons_pan"><div onClick={() => this.props.pause()} id="play_button"><i className="fas fa-play-circle"></i></div>
      <div onClick={() => this.props.reload()} id="load_button"><i className="fas fa-redo"></i></div>{fav_button}</div>);
    else if(this.props.etat=="pause")
      return(<div id="buttons_pan"><div onClick={() => this.props.play()} id="pause_button"><i className="fas fa-pause-circle"></i></div>
      <div onClick={() => this.props.reload()} id="load_button"><i className="fas fa-redo"></i></div>{fav_button}</div>);
    else
      return(<div id="buttons_pan"><div id="lds-facebook"><div></div><div></div><div></div></div>
      <div onClick={() => this.props.reload()} id="load_button"><i className="fas fa-redo"></i></div>{fav_button}</div>);
  }
}
export {Button_panel}