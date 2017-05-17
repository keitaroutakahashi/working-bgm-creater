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
          const hoge = Array.prototype.indexOf.call(document.querySelectorAll('.p-playList-items')[0].querySelectorAll('li'), e.currentTarget);
          console.log(hoge)
          song.pause()
          changeSong(hoge)
        }}
        className="list-group-item">{ this.props.title }
      </li>
    )
  }
}

