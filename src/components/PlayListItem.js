import React from 'react';

export default class Item extends React.Component {
  constructor({title, src}) {
    super();
    this.state = {
      title,
      src,
    }
  }




  render() {
    console.log(this.state.title)
    return(
      <li className="list-group-item">{ this.state.title }</li>      
    )
  }
}

