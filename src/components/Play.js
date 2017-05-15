import React from 'react';
import Item from './PlayListItem';


export default class Play extends React.Component {
  constructor() {
    super();
  }


  componentWillReceiveProps({ songs, currentNumber }) {
    if(songs.length) {
      const audio = new Audio(songs[currentNumber].previewUrl)
      // audio.play();
      audio.addEventListener('ended', () => {
        this.props.onChangeSong();
      })
    }

  }

  
  render() {
    const { songs, currentNumber, currentView, } = this.props;

    return (
      <div className="container-fluid c-container" style={{display: currentView === 'play' ? 'block' : 'none'}}>
        <div className="row">
          <div className="col-1">
            <button type="button" className="btn btn-outline-secondary">back</button>
          </div>
          <div className="p-playView col-8">
            <p className="">{ songs.length ? this.props.songs[currentNumber].trackName : 'loading...' }</p>
            <div className="p-playView-image">
              <img src={ songs.length ? this.props.songs[currentNumber].artworkUrl100 : 'loading...' } alt=""/>
            </div>
            <svg width="60" height="60">
              <circle cx="30" cy="30" r="30" fill="#191b1d" style={{cursor: 'pointer'}}></circle><polygon points="22.5,17.5 22.5,42.5 43.75,30 43.75,30" fill="#FFFFFF"></polygon></svg>
          </div>
          <div className="p-playList col-3">
            <p className="">Play List</p>
            <ul className="p-playList-items list-group">
              {
                this.props.songs.map(song => 
                  <Item key={song.trackId} title={song.trackName} src={song.previewUrl} />
                )
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
