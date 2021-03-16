import React from 'react';
import { radios } from './radios-big.mjs';
import {Radios} from './Radios.js';
import {Tags} from './Tags.js';

class SoundZone extends React.Component {
  constructor(props) {
    super(props);
    let tags = [];
    for(let radio of radios.list)
        for(let tag of radio.tags)
            if(tags.indexOf(tag)==-1)
                tags.push(tag);

    tags.sort();

    this.state = {
      tags: tags,
      select_tags: tags
    };
  }
  
  contain(key, tag)
  {
    if(key==null)
      return false;
    let contain=false;
    for(let _tag of radios.list[key].tags)
      if(this.state.select_tags.indexOf(_tag)!=-1 && tag!=_tag)
        contain=true;
    return contain;
  }

  update_select(tag,new_value) {
    let tag_value=this.state.tags[tag];
    if(new_value)
      this.setState({select_tags: [...this.state.select_tags, tag_value]});
    else
      this.setState({select_tags: this.state.select_tags.filter(_tag => _tag != tag_value)});
  }

  select_all() {
    this.setState({select_tags:this.state.tags});
  }

  unselect_all() {
    this.setState({select_tags:[]});
  }

  render() {
    return (
      <div className="SoundZone">
          <header>
            <h1>SoundZone 📻</h1>
          </header>
          
          <Tags tags={this.state.tags} select_tags={this.state.select_tags} update_select={(tag,new_value) => this.update_select(tag,new_value)} select_all={() => this.select_all()} unselect_all={() => this.unselect_all()}/>
          <Radios select_tags={this.state.select_tags} />
    
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