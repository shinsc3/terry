import React from 'react';
import { Authentication } from '../components';
import { createReactClass } from 'create-react-class'; //from React V15.5 추가
//import { connect } from 'react-redux';
//import { bindActionCreators} from 'redux';
//import * as authenTications from '../actions/authenTication';

//import { browserHistory } from 'react-router';

class Login extends React.Component {
//class Login extends createReactClass {
    constructor(props) {
        super(props);

        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(id, pw) {
    }

    render () {
        return (
            <div className="loginClass" >
                <Authentication mode={true} onLogin={this.handleLogin} />
            </div>
        );
    }
}

//export default connect(mapStateToProps, mapDispatchToProps)(Login);
export default Login;
