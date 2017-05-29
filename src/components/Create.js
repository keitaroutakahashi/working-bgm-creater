import React from 'react';
import FavoriteContainer from '../containers/FavoriteContainer';


export default class Create extends React.Component {
  constructor() {
    super();
    this.state = {
      input: null,
    }
  }

  componentWillReceiveProps({songs}) {
    // this.createMusic(songs);
  }


  onClickSubit() {
    if(this.props.artist === '') {

    } else {
      this.props.changeView('play');
    this.props.fetchAPI(this.props.artist);
    }
  }




  render() {
    const { currentView } = this.props;

    return (
      <div className="container-fluid c-container" style={{display: currentView === 'create' ? 'block' : 'none'}}>
        <div className="row">
          <div className="c-box c-box-left col-3"></div>
          <div className="c-box c-box-center col-6">
            <h2 className="c-box-ttl">BGM CREATER</h2>
            <p className="c-box-desc">Enter the name of an artist you like</p>
            <div className="c-box-input input-group">
              <input
                type="text"
                onChange={(e) => {this.props.changeName(e.target.value)}}
                className="form-control c-form-input"
                value={this.props.artist}
              />
            </div>
            <FavoriteContainer />
            <button
              type="button"
              onClick={() => {this.onClickSubit()}}
              className="btn btn-primary">
              MAKE IT
            </button>
          </div>
          <div className="c-box c-box-right col-3"></div>
        </div>
      </div>
    );
  }
}
