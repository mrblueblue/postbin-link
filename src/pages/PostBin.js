import React, {Component} from 'react';
import socket from '../utils/socket'
import onSetup from '../utils/onSetup';

const setup = ({params, actions}) => {
  socket.on(params.id, (data) => console.log({id: id, post: data}) )
}

const PostBin = (props) => (
  <div>
    <p>{props.params.id}</p>
  </div>
)

export default PostBin
