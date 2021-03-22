import React from 'react';
import { SearchBar } from './Search_Bar.js';
import { Tag } from './Tag.js';
class Tags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
    }
    this.list_tag = React.createRef();
    this.innerList = React.createRef();
    this.buttonSelectAll = React.createRef();
    this.search = React.createRef();
    this.firstTime=true;
  }

  growDiv(isclick) {
    if (isclick && this.list_tag.current.style.height!="0px" && this.list_tag.current.style.height!="") {
        this.list_tag.current.style.height = "0px";
    } else {
        this.list_tag.current.style.height = 40+this.innerList.current.clientHeight+ this.buttonSelectAll.current.clientHeight + "px";
    }
  }

  componentDidUpdate() {
    console.log(this.lastContent!=this.state.content);
    if(this.lastContent!=this.state.content)
      this.growDiv(false)
    this.lastContent=this.state.content;
  }

  render() {
    return (
    <div id="tags">
        <div id="tag_display" onClick={() => {this.growDiv(true);}}>Tags</div>
        <div ref={this.list_tag} id="list-tag">
            <div ref={this.buttonSelectAll} id="button_select_all_tags" onClick={(() => this.props.select_all())}>Select All</div> |
            <div id="button_unselect_all_tags" onClick={(() => this.props.unselect_all())}>Unselect All</div>
            <SearchBar placeHolder="Name of a tag ..." change={(value) => this.setState({content:value})}/>
          <div ref={this.innerList} id="inner_list-tag">
            {(() => {
                const tags = [];
                this.props.tags.forEach((value, key) => {
                  if(value.toLowerCase().indexOf(this.state.content.toLowerCase())!=-1)
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