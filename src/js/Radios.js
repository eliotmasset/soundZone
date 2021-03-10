import React from 'react';
import {Radio} from './Radio.js';
import {RadioPanel} from './RadioPanel.js';
import { radios } from './radios-big.mjs';
class Radios extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        list: radios.list,
    };
  }

  importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }

  render() {
    return (
      <div id="Radios">
      <RadioPanel />
          <div id="radio-list">
            {(() => {
            let compt=0;
            const radios = [];
            const images = this.importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/));
            this.state.list.forEach((value) => {
                radios.push(<Radio img={images[value.img]} key={compt++} value={value} />);
            });
            return radios;
            })()}
          </div>
      </div>
    );
  }
}
export {Radios}