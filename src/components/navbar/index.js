import React from 'react';
import './index.css'
import NavbarView from './view';

class Navbar extends React.Component {
  render () {
    return (
      <NavbarView
        isLoggedIn={this.props.state.isLoggedIn}
        currentPage={this.props.state.currentPage}
      />
    );
  }
}

export default Navbar;