import React, {Component} from 'react';
import socket from '../utils/socket'
import onSetup from '../utils/onSetup';

const subscribe = ({props}) => {
  const {id} = props.params;
  console.log(id)
  socket.on(id, (data) => console.log(data))
}

const PostBin = (props) => (
  <div>
    <p>{props.params.id}</p>
  </div>
)

export default onSetup(subscribe)(PostBin)
