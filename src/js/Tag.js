import React from 'react';
class Tag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let tags = this.props.select == true ? "tag select_tag" : "tag";
    return (
    <div id={this.props.tag} className={tags} onClick={(() => {this.props.update_select(this.props.data_key,!this.props.select)})}>
        {this.props.tag}
    </div>
    );
  }
}
export {Tag}