import React from 'react';
import Item from './PlayListItem';


export default class Play extends React.Component {
  constructor() {
    super();
    this.state = {
      songs: []
    }
  }


  componentWillReceiveProps({songs}) {
    this.setState({songs})
    console.log(songs)
    console.log(this)
  }

  
  render() {
    return(
      <div className="container-fluid c-container">
        <div className="row">
          <div className="p-playList col-3">
            <p className="">Play List</p>
            <ul className="p-playList-items list-group">
              {
                this.state.songs.map(song => 
                  <Item key={song.trackId} title={song.trackName} src={song.previewUrl} />
                )
              }
            </ul>
          </div>
          <div className="p-playView col-8">
            <p className="">曲名</p>
            <div className="p-playView-image">
              <img src="http://is5.mzstatic.com/image/thumb/Music7/v4/88/f6/9d/88f69da7-7e39-4834-7a82-ff050df16e96/source/200x200bb.jpg" alt=""/>
            </div>
          </div>
          <div className="col-1">
            <button type="button" className="btn btn-outline-secondary">back</button>
          </div>
        </div>
      </div>
    );
  }
}
