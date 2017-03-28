import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {
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

            <div className="logoname">TerryDB</div>

            <div>
                { this.props.isLoggedIn ? logoutButton : loginButton }
            </div>
        </div>
    ); // return

  } //render
} //end class

Header.propTypes = {
    isLoggedIn: React.PropTypes.bool,
    onLogout: React.PropTypes.func
};

Header.defaultProps = {
    isLoggedIn: false,
    onLogout: () => { console.error("logout function not defined");}
};
