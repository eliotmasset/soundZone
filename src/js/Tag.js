import React from 'react';
class Tag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        select : this.props.select,
    };
  }

  render() {
      let tags = this.state.select == true ? "tag select_tag" : "tag";
    return (
    <div id={this.props.tag} className={tags} onClick={(() => {this.setState({select: !this.state.select})})}>
        {this.props.tag}
    </div>
    );
  }
}
export {Tag}