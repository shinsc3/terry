import React from 'react';
import { Link } from 'react-router';

import PropTypes from 'prop-types';  //from react v15.5
import { createReactClass } from 'create-react-class'; //from React V15.5 추가

export default class Header extends React.Component {
//export default class Header extends createReactClass {
  constructor(props) {
    super(props);

    this.state = {
      menu_button_clicked: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      menu_button_clicked : true
    });
  }

  render() {
    const loginButton = (
      <li>
         <Link to="/login" className="LogInOut">
             <i className="material-icons">vpn_key</i>
         </Link>
       </li>
    );

    const logoutButton = (
      <li>
         <a onClick={this.props.onLogout} >
             <i className="material-icons">lock_open</i>
         </a>
       </li>
    );

    return (
        <div className="barHeader">
            <div className="menu-button">
                <div className="icon-wrapper" onClick={this.handleClick}>
                   <i className="material-icons">menu</i>
                </div>
            </div>
            { this.state.menu_button_clicked ?
                ( <div></div> ) :  ( <div></div> )
            }

            <div className="title_func">
                <div className="logo_name">
                    TerryDB
                </div>
                <div className="photo_search">
                    <i className="material-icons">search</i>
                </div>
            </div>

            <div>
                { this.props.isLoggedIn ? logoutButton : loginButton }
            </div>
        </div>
    ); // return

  } //render
} //end class

Header.propTypes = {
    isLoggedIn: PropTypes.bool,
    onLogout: PropTypes.func
};

Header.defaultProps = {
    isLoggedIn: false,
    onLogout: () => { console.error("logout function not defined");}
};
