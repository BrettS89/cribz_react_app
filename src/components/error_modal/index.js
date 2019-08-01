import React from 'react';
import './index.css';
import ErrorModalView from './view';

class ErrorModal extends React.Component {
  navigateToLogin = () => {
    this.props.history.push('login');
    this.props.actions.isNotError();
  };

  render() {
    return (
      <ErrorModalView
        isError={this.props.state.isError}
        navigateToLogin={this.navigateToLogin}
      />
    )
  }
}

export default ErrorModal;
