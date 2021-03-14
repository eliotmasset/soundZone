import React from 'react';
import { radios } from './radios-big.mjs';
import { Tag } from './Tag.js';
class Tags extends React.Component {
  constructor(props) {
    super(props);
    let tags = [];
    for(let radio of radios.list)
        for(let tag of radio.tags)
            if(tags.indexOf(tag)==-1)
                tags.push(tag);
    this.state = {
        tags: tags,
        select_tags:tags,
    }
    let deploy = false;
  }

  deploy_tags(){
    var list = document.getElementById("list-tag");
    var sectionHeight = list.scrollHeight;
    list.style.height = sectionHeight + 'px';
    list.style.padding = 10 + 'px';
    list.addEventListener('transitionend', function(e) {
      list.removeEventListener('transitionend', arguments.callee);
      list.style.height = null;
      list.style.padding = 0 + 'px';
    });
  }

  undeploy_tags(){
    var list = document.getElementById("list-tag");
    var sectionHeight = list.scrollHeight;
    var elementTransition = list.style.transition;
    list.style.transition = '';
    requestAnimationFrame(function() {
      list.style.height = sectionHeight + 'px';
      list.style.transition = elementTransition;
      list.style.padding = 10 + 'px';
      requestAnimationFrame(function() {
        list.style.height = 0 + 'px';
        list.style.padding = 0 + 'px';
      });
    });
  }

  update_select(value) {
      
  }

  render() {
    return (
    <div id="tags">
        <div id="tag_display" onClick={(() => {if(this.deploy){this.undeploy_tags()}else{this.deploy_tags()}this.deploy=!this.deploy;})}>Tags</div>
        <div id="list-tag">
            {(() => {
                const tags = [];
                this.state.tags.forEach((value, key) => {
                    tags.push(<Tag select={this.state.select_tags.indexOf(value)!=-1} key={key} tag={value} update_select={(() => this.update_select(value))}/>);

                });
                return tags;
            })()}
        </div>
    </div>
    );
  }
}
export {Tags}