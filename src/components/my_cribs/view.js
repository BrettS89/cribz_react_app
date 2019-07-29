import React from 'react';
import { Input, Button } from 'semantic-ui-react';

export default function myCribsView(props) {
  return (
    <div>
      <div className="add-crib-container">
        <form onSubmit={props.addCrib}>
          <Input name="crib" placeholder="Paste a listing link from Realtor.com" />
          <Button>Add</Button>
        </form>
      </div>
      {props.renderCribs()}
    </div>
  );
}
