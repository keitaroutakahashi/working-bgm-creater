import React from 'react';


const Create = () => (
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
        <div className="input-group">
          <input type="text" className="form-control c-form-input" />
        </div>
        <div className="input-group">
          <input type="text" className="form-control c-form-input" />
        </div>
        <div className="">
          <button type="button" className="btn btn-primary">Primary</button>        
        </div>
      </div>
      <div className="col-3">

      </div>
    </div>
  </div>
);


export default Create;