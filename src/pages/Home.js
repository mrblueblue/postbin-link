import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import api from '../utils/api';
import withContext from 'recompose/withContext';

const Home = ({history}) => {
  console.log(process.env.NODE_ENV)
  function createBin(){
    api.getBinId()
      .then((data) => history.push(`/${data.id}`))
  }

  return (
    <div className='home-container'>
      <div className='home-main'>
        <h1>PostBin</h1>
        <h4>Save and Inspect POST Requests</h4>
        <a onClick={createBin}>Click</a>
        <button>Create Bin</button>
      </div>
    </div>
  );
}

export default Home
