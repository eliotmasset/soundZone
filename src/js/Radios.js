import React from 'react';
import {Radio} from './Radio.js';
import {RadioPanel} from './RadioPanel.js';
import { radios } from './radios-big.mjs';
class Radios extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        list: radios.list,
        current_radio: null,
    };
    this.images = null;
  }

  importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }

  updateCurrent(key) {
    <div key={key} className="selected"></div>

    this.setState({current_radio: key});
  }

  render() {
    var img=undefined;
    if(this.state.list[this.state.current_radio]!=undefined) {
      var img=this.images[this.state.list[this.state.current_radio].img];
    }
    return (
      <div id="Radios">
      <RadioPanel img={img} radio={this.state.list[this.state.current_radio]} />
          <div id="radio-list">
            {(() => {
            const radios = [];
            this.images = this.importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/));
            Object.keys(this.state.list).forEach((key) => {
                radios.push(<Radio img={this.images[this.state.list[key].img]} key={key} selected={false} value={this.state.list[key]} onClick={() => this.updateCurrent(key)} />);
            });
            return radios;
            })()}
          </div>
      </div>
    );
  }
}
export {Radios}