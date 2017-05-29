import React from 'react';

export default class Item extends React.Component {
  constructor() {
    super();
  }

  componentWillReceiveProps() {

  }


  render() {
    const { changeSong, song, num } = this.props;
    return (
      <li
        onClick={(e) => {
          const clickNum = Array.prototype.indexOf.call(document.querySelectorAll('.p-playList-items')[0].querySelectorAll('li'), e.currentTarget);
          song.pause()
          changeSong(clickNum)
        }}
        className="list-group-item">
          { this.props.title }
      </li>
    )
  }
}

