import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Navbar from '../containers/navbar';
import Login from '../containers/login';
import MyCribs from '../containers/my_cribs';
import Spinner from '../components/Spinner';
import ErrorModal from '../containers/error_modal';

export default () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Navbar />
        <div style={{ height: '90vh', marginTop: '74px' }}>
          <Switch>
            <Route path="/mycribs" component={MyCribs} />
            <Route path="/" component={Login} />
          </Switch>      
        </div>
        <Spinner />
        <ErrorModal />
      </React.Fragment>
    </BrowserRouter>
  );
};