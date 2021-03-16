import React from 'react';
import {Radio} from './Radio.js';
import {RadioPanel} from './RadioPanel.js';
import { Nb_radios } from './Nb_radios.js';
import { radios } from './radios-big.mjs';

class Radios extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        list: radios.list,
        current_radio: null
    };
    this.images = null;
  }

  importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }

  updateCurrent(key) {
      console.log("update !");
    this.setState({current_radio: key});
  }


  contain(key)
  {
    if(key==null)
      return true;
    let contain=false;
    for(let tag of this.state.list[key].tags)
      if(this.props.select_tags.indexOf(tag)!=-1)
        contain=true;
    return contain;
  }

  render() {
    const radios = [];
    var img=undefined;
    if(this.state.list[this.state.current_radio]!=undefined) {
      var img=this.images[this.state.list[this.state.current_radio].img];
    }
    return (
        <div id="Radios">
          <RadioPanel img={img} radio={this.state.list[this.state.current_radio]} />
          <div id="radio-list">
            {(() => {
              this.images = this.importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/));
              Object.keys(this.state.list).forEach((key) => {
                if(this.contain(key))
                  radios.push(<Radio img={this.images[this.state.list[key].img]} key={key} data_key={key} selected={this.state.current_radio} value={this.state.list[key]} onClick={() => this.updateCurrent(key)} />);
                });
              return radios;
            })()}
          </div>
          <Nb_radios nb_radios={radios.length} />
      </div>
    );
  }
}
export {Radios}