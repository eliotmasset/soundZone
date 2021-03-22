import React from 'react';
import { radios } from './radios-big.mjs';
import {Radios} from './Radios.js';
import {Tags} from './Tags.js';

class SoundZone extends React.Component {
  constructor(props) {
    super(props);
    let temp_tags = [];
    let tags = [];
    for(let radio of radios.list)
        for(let tag of radio.tags)
            if(temp_tags.indexOf(tag)==-1)
              temp_tags.push(tag);

    temp_tags.sort();

    for(let tag of temp_tags)
      if(tag.search(/[A-Z]{1}\/[A-Z]{1}\/[A-Z]{1}/g)!=-1)
        tags.push(tag);
    
    for(let tag of temp_tags)
      if(tags.indexOf(tag)==-1)
        tags.push(tag);

    this.state = {
      tags: tags,
      select_tags: tags,
      favs: [],
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

  update_fav(fav) {
    if(this.state.favs.indexOf(fav)==-1)
      this.setState({favs: [...this.state.favs, fav]});
    else
      this.setState({favs: this.state.favs.filter(_fav => _fav != fav)});
  }

  render() {
    return (
      <div className="SoundZone">
          <header>
            <h1>SoundZone 📻</h1>
          </header>
          
          <Tags tags={this.state.tags} select_tags={this.state.select_tags} update_select={(tag,new_value) => this.update_select(tag,new_value)} select_all={() => this.select_all()} unselect_all={() => this.unselect_all()}/>
          <Radios select_tags={this.state.select_tags} favs={this.state.favs} update_fav={(fav) => this.update_fav(fav)} />
    
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