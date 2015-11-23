import React from 'react';
import {connect} from 'react-redux';
import socket from '../utils/socket'
import onSetup from '../utils/onSetup';
import compose from 'recompose/compose';

const subscribe = ({props}) => {
  const {id} = props.params;
  socket.on(id, (data) => console.log(data))
}

const PostBin = ({requests, params}) => (
  <div>
    <p>Yo DAWG</p>
    <p>{params.id}</p>
  </div>
)

export default onSetup(subscribe)(PostBin)
