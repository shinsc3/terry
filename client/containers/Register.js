import React from 'react';
import { Authentication } from '../components';

import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as authenTications from '../actions/authenTication';

import { browserHistory } from 'react-router';
// register에 성공하면 login으로 가게 path를 설정하기위해서 필요

class Register extends React.Component {

  constructor(props) {
      super(props);

      this.handleRegister = this.handleRegister.bind(this);
  }

  handleRegister(id, nick, pw, groupname) {
      this.props.actions.signupRequest(id, nick, pw, groupname);
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
//        actions: bindActionCreators(authenTications, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
