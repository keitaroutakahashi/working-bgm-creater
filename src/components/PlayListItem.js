import React from 'react';

export default class Item extends React.Component {
  constructor() {
    super();
  }






  render() {

    return(
      <li className="list-group-item">{ this.props.title }</li>      
    )
  }
}

