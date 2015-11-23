import React from 'react';
import {connect} from 'react-redux';
import socket from '../../utils/socket'
import onSetup from '../../utils/onSetup';
import compose from 'recompose/compose';

const subscribe = ({props}) => {
  const {id} = props.params;
  const {addRequest} = props.actions
  socket.on(id, (data) => addRequest(data))
}

const PostBin = ({requests, params}) => (
  <div>
    <p>Yo DAWG</p>
    <p>{params.id}</p>
    {requests.map((req, index) => (
      <p key={index}>{JSON.stringify(req)}</p>
    ))}
  </div>
)

export default onSetup(subscribe)(PostBin)
