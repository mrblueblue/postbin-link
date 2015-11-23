import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import api from '../utils/api';

const Home = ({history, pushState}) => {

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

function mapStateToProps(state){
  return {state};
}

function mapDispatchToProps(dispatch){
  return {dispatch};
}

export default connect(mapStateToProps)(Home)
