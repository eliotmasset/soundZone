import React from 'react';
import {Radios} from './Radios.js';
class SoundZone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="SoundZone">
          <header>
            <h1>SoundZone 📻</h1>
          </header>
          <content>
            <Radios />
          </content>
          <footer>
              <p>
                © 2021 - Eliot MASSET & Lucas POLLET
              </p>
          </footer>
      </div>
    );
  }
}
export {SoundZone}