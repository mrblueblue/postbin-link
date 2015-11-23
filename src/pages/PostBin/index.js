import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as requestActions from '../../actions/requests';
import Postbin from './Postbin';

function mapStateToProps(state){
  const {requests} = state;
  return {requests};
}

function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(requestActions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(Postbin)
