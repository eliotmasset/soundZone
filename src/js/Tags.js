import React from 'react';
import { Tag } from './Tag.js';
class Tags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  growDiv() {
    var growDiv = document.getElementById('list-tag');
    if (growDiv.clientHeight) {
      growDiv.style.height = 0;
    } else {
      growDiv.style.height = document.getElementById('inner_list-tag').clientHeight+ document.getElementById('button_select_all_tags').clientHeight + "px";
    }
  }

  render() {
    return (
    <div id="tags">
        <div id="tag_display" onClick={(() => {this.growDiv();})}>Tags</div>
        <div id="list-tag">
            <div id="button_select_all_tags" onClick={(() => this.props.select_all())}>Select All</div> |
            <div id="button_unselect_all_tags" onClick={(() => this.props.unselect_all())}>Unselect All</div>
          <div id="inner_list-tag">
            {(() => {
                const tags = [];
                this.props.tags.forEach((value, key) => {
                    tags.push(<Tag select={this.props.select_tags.indexOf(value)!=-1} data_key={key} key={key} tag={value} update_select={((tag, new_value) => this.props.update_select(tag,new_value))}/>);
                });
                return tags;
            })()}
            </div>
        </div>
    </div>
    );
  }
}
export {Tags}