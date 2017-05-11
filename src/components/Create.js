import React from 'react';

export default class Create extends React.Component {
  constructor() {
    super();
  }

  componentWillReceiveProps({songs}) {
    // this.createMusic(songs);
  }


  createMusic(songs) {
    console.log(songs)
    const audio = new Audio(songs.first[0].previewUrl)
    audio.play();
  }


  render() {
    return(
      <div className="container-fluid c-container">
        <div className="row">
          <div className="col-3">

          </div>
          <div className="col-6">
            <h2>BGM CREATER</h2>
            <p>Aritist</p>
            <div className="input-group">
              <input type="text" className="form-control c-form-input" />
            </div>
            <div className="">
              <button type="button" onClick={() => {console.log('ok')}} className="btn btn-primary">MAKE IT</button>      
            </div>
          </div>
          <div className="col-3">

          </div>
        </div>
      </div>
    );
  }
}
