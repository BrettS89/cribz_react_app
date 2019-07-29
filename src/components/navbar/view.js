import React from 'react';

export default function navbarView(props) {
  const renderLoginSignup = () => {
    if (!props.isLoggedIn) {
      console.log('in');
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
        <i class="fas fa-chess-rook"></i> Cribz
      </div>
      <div className="auth-links">
        {renderLoginSignup()}
      </div>
    </div>
  );
}
