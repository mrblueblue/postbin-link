import React, {PropTypes} from 'react';
import api from 'utils/api';

export default function Home({history, pushState}){

  function createBin(){
    api.getBinId()
      .then((data) => history.push(`/${data.id}`))
  }

  return (
    <div className='home-container'>
      <div className='home-main'>
        <h1>PostBin</h1>
        <h4>Save and Inspect POST Requests</h4>
        <button onClick={createBin}>
          Create Bin
        </button>
      </div>
    </div>
  );
}
