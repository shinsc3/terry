import React from 'react';
import { Authentication } from '../components';

import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as authenTications from '../actions/authenTication';

import { browserHistory } from 'react-router';
import { createReactClass } from 'create-react-class'; //from React V15.5 추가

// register에 성공하면 login으로 가게 path를 설정하기위해서 필요

class Register extends React.Component {
//class Register extends createReactClass {
  constructor(props) {
      super(props);

      this.handleRegister = this.handleRegister.bind(this);
  }

  handleRegister(username, nickname, password, groupname) {
      console.log('username-- nickname-- password groupname', username, nickname, password, groupname);
      this.props.actions.signupRequest(username, nickname, password, groupname);
  }


  render () {
      return (
          <div>
              <Authentication mode={false}
                  onRegister={this.handleRegister} />
          </div>
      );
  }
} // class end

const mapStateToProps = (state) => {
    return {
//        status: state.authenReducer.register.status,
//        errorCode: state.authenReducer.register.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(authenTications, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
