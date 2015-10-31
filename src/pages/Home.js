import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Home extends Component {
  render() {
    return (
      <div className='home-container'>
        <div className='home-main'>
          <h1>PostBin</h1>
          <h4>Save and Inspect POST Requests</h4>
          <Link to='bin'>Click</Link>
          <button>Create Bin</button>
        </div>
      </div>
    );
  }
}
