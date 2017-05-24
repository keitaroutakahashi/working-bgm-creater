import React from 'react';

export default class Item extends React.Component {
  constructor() {
    super();
  }




  render() {
    const { changeSong, song } = this.props;
    return (
      <li
        onClick={(e) => {
          const clickNum = Array.prototype.indexOf.call(document.querySelectorAll('.p-playList-items')[0].querySelectorAll('li'), e.currentTarget);
          song.pause()
          changeSong(clickNum)
        }}
        className="list-group-item">
          <i className="fa fa-volume-up"></i>
          { this.props.title }
      </li>
    )
  }
}

