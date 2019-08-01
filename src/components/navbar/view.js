import React from 'react';

export default function navbarView(props) {
  const renderLoginSignup = () => {
    if (!props.isLoggedIn && props.currentPage !== 'mycribs') {
      return (
        <React.Fragment>
          <div className="auth-link">Login</div>
          <div className="auth-link signup">Sign up</div>
        </React.Fragment>
      );
    }
  };

  return (
    <div className="navbar">
      <div className="auth-links"></div>
      <div className="nav-logo">
        <i className="fas fa-chess-rook"></i> Baller Cribz
      </div>
      <div className="auth-links">
        {renderLoginSignup()}
      </div>
    </div>
  );
}
