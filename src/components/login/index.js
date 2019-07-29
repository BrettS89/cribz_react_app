import React from 'react';
import './index.css';
import LoginView from './view';

class Login extends React.Component {
  onLogin = e => {
    e.preventDefault();
    const credentials = {
      username: e.target.email.value,
      password: e.target.password.value,
    }
    e.target.email.value = '';
    e.target.password.value = '';
    this.props.actions.login({ credentials, navigate: this.navigate });
  };

  navigate = () => {
    this.props.history.push('mycribs');
  };

  render () {
    return (
      <LoginView
        onLogin={this.onLogin}
      />
    );
  }
}

export default Login;
