import React from 'react';
class RadioPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        current_radio:"",
    };
  }

  render() {
    return (
      <div id="RadioPanel">
      </div>
    );
  }
}
export {RadioPanel}