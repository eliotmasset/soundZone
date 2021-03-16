import React from 'react';

class Nb_radios extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if(this.props.nb_radios == 0){
        return (
            <p>Aucune radio trouvée</p>
        );
    }else if(this.props.nb_radios == 1){
        return(
            <p>1 radio trouvée</p>
        );
    }else{
        return(
            <p>{this.props.nb_radios} radios trouvées</p>
        );
    }
  }
}
export {Nb_radios}