import React from 'react';
import Item from './PlayListItem';


export default class Play extends React.Component {
  constructor() {
    super();
    this.state = {
      song: '',
    }
  }


  componentWillReceiveProps({ songs, currentNumber }) {
    if(songs.length) {
      const audio = new Audio(songs[currentNumber].previewUrl)
      this.setState({song: audio})
      audio.play();
      audio.addEventListener('ended', () => {
        if(this.props.currentNumber === songs.length - 1) {
          this.props.onChangeSong(0); 
        } else {
          this.props.onChangeSong(this.props.currentNumber + 1); 
        }
      })
    }
  }


  hundleBackBtn() {
    this.props.changeView('create');
    this.props.resetSong([]);
    this.props.onChangeSong(0);     
    this.state.song.pause();
  }

  
  render() {
    const { songs, currentNumber, currentView, } = this.props;

    return (
      <div className="container-fluid p-container" style={{display: currentView === 'play' ? 'block' : 'none'}}>
        <div className="row">
          <div className="col-2">
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => {this.hundleBackBtn()}}>back</button>
          </div>
          <div className="p-playView col-7">
            <p className="p-playView-ttl">{ songs.length ? this.props.songs[currentNumber].trackName : 'loading...' }</p>
            <div className="p-playView-image">
              <img src={ songs.length ? this.props.songs[currentNumber].artworkUrl100 : 'loading...' } alt=""/>
            </div>
          </div>
          <div className="p-playList col-3">
            <p className="p-playList-ttl">Play List</p>
            <ul className="p-playList-items list-group">
              {
                this.props.songs.map(song => 
                  <Item
                    key={song.trackId}
                    title={song.trackName}
                    song={this.state.song}
                    num={currentNumber}
                    changeSong={this.props.onChangeSong} />
                )
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
