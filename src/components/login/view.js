import React from 'react';
import { Input, Button } from 'semantic-ui-react';

export default function login(props) {
  return (
    <div className="login-page">
      <form onSubmit={props.onLogin}>
        <h1>Login</h1>
        <div className="auth-input">
          <Input name="email" placeholder="Email address" />
        </div>

        <div className="auth-input">
          <Input name="password" type="password" placeholder="Password" />
        </div>

        <Button id="submit-button">Login</Button>
      </form>
    </div>
  );
}
