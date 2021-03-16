import React from 'react';
import { Tag } from './Tag.js';
class Tags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.list_tag = React.createRef();
    this.innerList = React.createRef();
    this.buttonSelectAll = React.createRef();
  }

  growDiv() {
    if (this.list_tag.current.clientHeight) {
        this.list_tag.current.style.height = 0;
    } else {
        this.list_tag.current.style.height = this.innerList.current.clientHeight+ this.buttonSelectAll.current.clientHeight + "px";
    }
  }

  render() {
    return (
    <div id="tags">
        <div id="tag_display" onClick={(() => {this.growDiv();})}>Tags</div>
        <div ref={this.list_tag} id="list-tag">
            <div ref={this.buttonSelectAll} id="button_select_all_tags" onClick={(() => this.props.select_all())}>Select All</div> |
            <div id="button_unselect_all_tags" onClick={(() => this.props.unselect_all())}>Unselect All</div>
          <div ref={this.innerList} id="inner_list-tag">
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