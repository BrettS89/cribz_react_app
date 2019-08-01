import React from 'react';
import { Modal, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


export default function errorModalView(props) {
  return (
    <Modal className="error-modal" open={props.isError}>
      <Modal.Content className="error-modal-content">
        <div className="error-modal-title">
          An error occured please log in again
        </div>
        <Link to="/login" className="ui button">
          Okay
        </Link>
      </Modal.Content>
    </Modal>
  );
}
